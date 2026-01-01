import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from './storage.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('storage')
@UseGuards(JwtAuthGuard)
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @CurrentUser() user: any) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const objectName = `${user.userId}/${Date.now()}-${file.originalname}`;
    const metaData = {
      'Content-Type': file.mimetype,
      'X-User-Id': user.userId,
    };

    await this.storageService.uploadBuffer(objectName, file.buffer, metaData);

    const presignedUrl = await this.storageService.getPresignedUrl(objectName);

    return {
      objectName,
      url: presignedUrl,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  @Get('files')
  async listFiles(@CurrentUser() user: any) {
    const prefix = `${user.userId}/`;
    const files = await this.storageService.listFiles(prefix);
    return files.map((file) => ({
      name: file.name,
      size: file.size,
      lastModified: file.lastModified,
    }));
  }

  @Get('presigned/:objectName')
  async getPresignedUrl(@Param('objectName') objectName: string, @CurrentUser() user: any) {
    // Security: Ensure user can only access their own files
    if (!objectName.startsWith(`${user.userId}/`)) {
      throw new NotFoundException('File not found');
    }

    const exists = await this.storageService.fileExists(objectName);
    if (!exists) {
      throw new NotFoundException('File not found');
    }

    const url = await this.storageService.getPresignedUrl(objectName);
    return { url };
  }

  @Delete(':objectName')
  async deleteFile(@Param('objectName') objectName: string, @CurrentUser() user: any) {
    // Security: Ensure user can only delete their own files
    if (!objectName.startsWith(`${user.userId}/`)) {
      throw new NotFoundException('File not found');
    }

    const exists = await this.storageService.fileExists(objectName);
    if (!exists) {
      throw new NotFoundException('File not found');
    }

    await this.storageService.deleteFile(objectName);
    return { message: 'File deleted successfully' };
  }
}
