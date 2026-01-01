import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class HealthService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly storageService: StorageService
  ) {}

  async check() {
    const checks = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: await this.checkDatabase(),
        storage: await this.checkStorage(),
      },
    };

    const allHealthy = Object.values(checks.services).every((service) => service.status === 'ok');

    return {
      ...checks,
      status: allHealthy ? 'ok' : 'degraded',
    };
  }

  private async checkDatabase(): Promise<{ status: string; message?: string }> {
    try {
      await this.dataSource.query('SELECT 1');
      return { status: 'ok' };
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  private async checkStorage(): Promise<{ status: string; message?: string }> {
    try {
      await this.storageService.fileExists('health-check');
      return { status: 'ok' };
    } catch (error: any) {
      // If bucket doesn't exist or connection fails, it's an error
      if (error.code === 'NotFound') {
        return { status: 'ok' }; // Bucket exists, file doesn't (expected)
      }
      return {
        status: 'error',
        message: error.message,
      };
    }
  }
}
