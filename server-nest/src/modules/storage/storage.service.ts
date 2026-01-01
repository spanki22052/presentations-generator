import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

@Injectable()
export class StorageService implements OnModuleInit {
  private readonly logger = new Logger(StorageService.name);
  private minioClient: Minio.Client;
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    const minioConfig = this.configService.get('minio');
    
    // Extract hostname from endpoint if it's a full URL
    let endpoint = minioConfig.endpoint;
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      try {
        const url = new URL(endpoint);
        endpoint = url.hostname;
      } catch (error) {
        // If URL parsing fails, try to extract hostname manually
        endpoint = endpoint.replace(/^https?:\/\//, '').split(':')[0].split('/')[0];
      }
    }

    this.minioClient = new Minio.Client({
      endPoint: endpoint,
      port: minioConfig.port,
      useSSL: minioConfig.useSSL,
      accessKey: minioConfig.accessKey,
      secretKey: minioConfig.secretKey,
    });

    this.bucketName = minioConfig.bucketName;
  }

  async onModuleInit() {
    await this.ensureBucketExists();
  }

  private async ensureBucketExists(): Promise<void> {
    try {
      const exists = await this.minioClient.bucketExists(this.bucketName);
      if (!exists) {
        await this.minioClient.makeBucket(this.bucketName, 'us-east-1');
        this.logger.log(`Bucket ${this.bucketName} created successfully`);
      }
    } catch (error) {
      this.logger.error(`Failed to ensure bucket exists: ${error.message}`, error.stack);
      throw error;
    }
  }

  async uploadFile(
    objectName: string,
    filePath: string,
    metaData?: Minio.ItemBucketMetadata
  ): Promise<string> {
    try {
      await this.minioClient.fPutObject(this.bucketName, objectName, filePath, metaData);
      return objectName;
    } catch (error) {
      this.logger.error(`Failed to upload file ${objectName}: ${error.message}`, error.stack);
      throw new Error(`File upload failed: ${error.message}`);
    }
  }

  async uploadBuffer(
    objectName: string,
    buffer: Buffer,
    metaData?: Minio.ItemBucketMetadata
  ): Promise<string> {
    try {
      await this.minioClient.putObject(
        this.bucketName,
        objectName,
        buffer,
        buffer.length,
        metaData
      );
      return objectName;
    } catch (error) {
      this.logger.error(`Failed to upload buffer ${objectName}: ${error.message}`, error.stack);
      throw new Error(`File upload failed: ${error.message}`);
    }
  }

  async getFile(objectName: string): Promise<Buffer> {
    try {
      const dataStream = await this.minioClient.getObject(this.bucketName, objectName);
      const chunks: Buffer[] = [];

      return new Promise((resolve, reject) => {
        dataStream.on('data', (chunk) => chunks.push(chunk));
        dataStream.on('end', () => resolve(Buffer.concat(chunks)));
        dataStream.on('error', (error) => reject(error));
      });
    } catch (error) {
      this.logger.error(`Failed to get file ${objectName}: ${error.message}`, error.stack);
      throw new Error(`File retrieval failed: ${error.message}`);
    }
  }

  async getFileStream(objectName: string): Promise<NodeJS.ReadableStream> {
    try {
      return await this.minioClient.getObject(this.bucketName, objectName);
    } catch (error) {
      this.logger.error(`Failed to get file stream ${objectName}: ${error.message}`, error.stack);
      throw new Error(`File stream retrieval failed: ${error.message}`);
    }
  }

  async deleteFile(objectName: string): Promise<void> {
    try {
      await this.minioClient.removeObject(this.bucketName, objectName);
    } catch (error) {
      this.logger.error(`Failed to delete file ${objectName}: ${error.message}`, error.stack);
      throw new Error(`File deletion failed: ${error.message}`);
    }
  }

  async getPresignedUrl(objectName: string, expiry: number = 7 * 24 * 60 * 60): Promise<string> {
    try {
      return await this.minioClient.presignedGetObject(this.bucketName, objectName, expiry);
    } catch (error) {
      this.logger.error(
        `Failed to generate presigned URL for ${objectName}: ${error.message}`,
        error.stack
      );
      throw new Error(`Presigned URL generation failed: ${error.message}`);
    }
  }

  async listFiles(prefix?: string): Promise<Minio.BucketItem[]> {
    try {
      const objectsStream = this.minioClient.listObjects(this.bucketName, prefix, true);

      const objects: Minio.BucketItem[] = [];
      return new Promise((resolve, reject) => {
        objectsStream.on('data', (obj) => objects.push(obj));
        objectsStream.on('end', () => resolve(objects));
        objectsStream.on('error', (error) => reject(error));
      });
    } catch (error) {
      this.logger.error(`Failed to list files: ${error.message}`, error.stack);
      throw new Error(`File listing failed: ${error.message}`);
    }
  }

  async fileExists(objectName: string): Promise<boolean> {
    try {
      await this.minioClient.statObject(this.bucketName, objectName);
      return true;
    } catch (error) {
      if (error.code === 'NotFound') {
        return false;
      }
      throw error;
    }
  }

  getBucketName(): string {
    return this.bucketName;
  }
}
