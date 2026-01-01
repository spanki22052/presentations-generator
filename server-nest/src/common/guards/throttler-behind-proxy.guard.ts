import { Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Request } from 'express';

@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  protected async getTracker(req: Record<string, any>): Promise<string> {
    const forwardedFor = req.headers?.['x-forwarded-for'] as string | undefined;
    const ip = req.ip || req.socket?.remoteAddress || 'unknown';

    if (forwardedFor) {
      return forwardedFor.split(',')[0].trim();
    }

    return ip;
  }
}
