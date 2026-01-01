import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { I18nContext } from 'nestjs-i18n';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;
    
    let message: string;
    
    if (exceptionResponse) {
      const rawMessage = typeof exceptionResponse === 'string' 
        ? exceptionResponse 
        : (exceptionResponse as any).message;
      
      // Try to translate the message if it's a known error key
      message = this.translateMessage(rawMessage, request);
    } else {
      const i18n = I18nContext.current();
      message = i18n
        ? i18n.translate('common.internalServerError')
        : 'Internal server error';
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
    };

    this.logger.error(
      `${request.method} ${request.url} ${status}`,
      exception instanceof Error ? exception.stack : JSON.stringify(exception)
    );

    response.status(status).json(errorResponse);
  }

  private translateMessage(rawMessage: string, request: Request): string {
    // Map common error messages to translation keys
    const messageMap: Record<string, string> = {
      'Invalid credentials': 'auth.invalidCredentials',
      'Invalid refresh token': 'auth.invalidRefreshToken',
      'User not found': 'auth.userNotFound',
      'Registration failed': 'auth.registrationFailed',
      'User with this email already exists': 'users.emailAlreadyExists',
    };

    const translationKey = messageMap[rawMessage];
    if (translationKey) {
      try {
        const i18n = I18nContext.current();
        if (i18n) {
          return i18n.translate(translationKey);
        }
      } catch (error) {
        // Fallback to original message if translation fails
        return rawMessage;
      }
    }

    return rawMessage;
  }
}
