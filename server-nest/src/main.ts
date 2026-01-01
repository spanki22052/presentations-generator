import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nodeEnv = configService.get<string>('nodeEnv') || 'development';

  // Security: Helmet for HTTP headers
  // Disable upgrade-insecure-requests in development to allow HTTP on localhost
  if (nodeEnv === 'development') {
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            'upgrade-insecure-requests': null, // Allow HTTP in development
          },
        },
      })
    );
  } else {
    app.use(helmet());
  }

  // CORS configuration
  const corsOrigins = configService.get<string[]>('cors.origin') || [
    'http://localhost:3000',
    'http://localhost:5173',
  ];
  app.enableCors({
    origin: corsOrigins,
    credentials: configService.get<boolean>('cors.credentials') ?? true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Language'],
  });

  // Cookie parser
  app.use(cookieParser());

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  // API prefix
  const apiPrefix = configService.get<string>('apiPrefix') || 'api';
  app.setGlobalPrefix(apiPrefix);

  // HTTPS redirect (production only, skip for localhost)
  if (nodeEnv === 'production') {
    app.use((req: Request, res: Response, next: NextFunction) => {
      // Skip HTTPS redirect for localhost/127.0.0.1 in development
      const host = req.headers.host || 'localhost';
      const isLocalhost =
        host.includes('localhost') || host.includes('127.0.0.1') || host.startsWith('0.0.0.0');

      if (isLocalhost) {
        return next();
      }

      if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
        return next();
      }

      res.redirect(`https://${host}${req.url}`);
    });
  }

  const port = configService.get<number>('port') || 3001;
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}/${apiPrefix}`);
  console.log(`📝 Environment: ${nodeEnv}`);
}

bootstrap();
