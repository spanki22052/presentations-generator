# Presentations Generator - NestJS Backend

Secure, production-ready NestJS backend with JWT authentication and authorization.

## Features

- 🔐 JWT-based authentication (access + refresh tokens)
- 🛡️ Security-first architecture (OWASP best practices)
- ✅ Input validation with class-validator
- 🚦 Rate limiting (DDoS protection)
- 📊 Request logging and error handling
- 🔒 Role-based access control (RBAC)
- 🗄️ PostgreSQL with TypeORM
- 🔄 Refresh token rotation
- 📦 MinIO object storage integration
- 🐳 Docker Compose setup with all services
- 🏥 Health check endpoints

## Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeORM** - PostgreSQL ORM
- **Passport** - Authentication middleware
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing (12+ rounds)
- **Helmet** - Security headers
- **class-validator** - DTO validation
- **MinIO** - S3-compatible object storage
- **Docker** - Containerization
- **PostgreSQL** - Relational database

## Prerequisites

- Node.js 18+ 
- Docker & Docker Compose (for containerized setup)
- PostgreSQL 14+ (if running without Docker)
- npm or yarn

## Installation

### Option 1: Docker Compose (Recommended)

1. Create environment file:
```bash
cp docker-compose.env.example .env
```

2. Update `.env` with your configuration (especially passwords and secrets)

3. Start all services:
```bash
docker compose up -d
```

This will start:
- PostgreSQL database (port 5432)
- MinIO object storage (ports 9000, 9001)
- NestJS backend (port 3000)

4. Check service health:
```bash
curl http://localhost:3000/api/health
```

5. Access MinIO Console:
- URL: `http://localhost:9001`
- Default credentials: `minioadmin` / `minioadmin` (change in `.env`)

### Option 2: Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/presentations_db
JWT_SECRET=your-super-secret-jwt-key-change-in-production-min-32-chars
JWT_ACCESS_TOKEN_EXPIRATION=15m
JWT_REFRESH_TOKEN_EXPIRATION=7d
NODE_ENV=development
PORT=3000
API_PREFIX=api
CORS_ORIGIN=http://localhost:5173
BCRYPT_ROUNDS=12
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_USE_SSL=false
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET_NAME=presentations
```

4. Start PostgreSQL and MinIO (or use Docker Compose for just these services)

5. Run migrations (when available):
```bash
npm run migration:run
```

6. Start the application:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000/api`

## Running the Application

### Development (Local)
```bash
npm run start:dev
```

### Production (Docker)
```bash
docker compose up -d
```

### Production (Local)
```bash
npm run build
npm run start:prod
```

## API Endpoints

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

Response:
```json
{
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    }
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Refresh Token
```http
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer <access_token>
```

### Storage (MinIO)

#### Upload File
```http
POST /api/storage/upload
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

file: <file>
```

Response:
```json
{
  "data": {
    "objectName": "userId/timestamp-filename.ext",
    "url": "http://minio:9000/presentations/userId/...",
    "size": 12345,
    "mimetype": "image/png"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### List Files
```http
GET /api/storage/files
Authorization: Bearer <access_token>
```

#### Get Presigned URL
```http
GET /api/storage/presigned/:objectName
Authorization: Bearer <access_token>
```

#### Delete File
```http
DELETE /api/storage/:objectName
Authorization: Bearer <access_token>
```

### Health Check

#### Check Service Health
```http
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "services": {
    "database": { "status": "ok" },
    "storage": { "status": "ok" }
  }
}
```

## Protected Endpoints

Use the `@UseGuards(JwtAuthGuard)` decorator to protect endpoints:

```typescript
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CurrentUser } from './auth/decorators/current-user.decorator';

@Controller('protected')
export class ProtectedController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@CurrentUser() user: any) {
    return user;
  }
}
```

## Role-Based Access Control

Use `@Roles()` decorator with `RolesGuard`:

```typescript
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { Roles } from './auth/decorators/roles.decorator';
import { UserRole } from './users/entities/user.entity';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  @Get('dashboard')
  @Roles(UserRole.ADMIN)
  getDashboard() {
    return { message: 'Admin dashboard' };
  }
}
```

## Security Features

- ✅ Input validation on all DTOs
- ✅ SQL injection prevention (parameterized queries)
- ✅ Rate limiting (10 requests/minute default)
- ✅ CORS whitelist configuration
- ✅ Security headers (Helmet)
- ✅ Password hashing (bcrypt, 12+ rounds)
- ✅ JWT token expiration (15min access, 7d refresh)
- ✅ Refresh token rotation
- ✅ Error handling (no info leaks)
- ✅ Request logging

## Project Structure

```
src/
├── modules/
│   ├── auth/              # Authentication module
│   │   ├── dto/          # Data transfer objects
│   │   ├── guards/       # Auth guards
│   │   ├── strategies/   # Passport strategies
│   │   └── decorators/   # Custom decorators
│   ├── users/            # Users module
│   │   ├── entities/     # TypeORM entities
│   │   └── dto/          # DTOs
│   ├── storage/          # MinIO storage module
│   │   ├── storage.service.ts
│   │   └── storage.controller.ts
│   └── health/           # Health check module
│       ├── health.service.ts
│       └── health.controller.ts
├── common/
│   ├── filters/          # Exception filters
│   ├── interceptors/     # Request/response interceptors
│   └── guards/           # Global guards
├── config/               # Configuration
├── database/             # Database setup & migrations
└── main.ts              # Application entry point
```

## Development

### Generate Migration
```bash
npm run migration:generate -- -n MigrationName
```

### Run Migrations
```bash
npm run migration:run
```

### Revert Migration
```bash
npm run migration:revert
```

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | - |
| `POSTGRES_USER` | PostgreSQL username | `postgres` |
| `POSTGRES_PASSWORD` | PostgreSQL password | - |
| `POSTGRES_DB` | PostgreSQL database name | `presentations_db` |
| `JWT_SECRET` | Secret key for JWT signing | - |
| `JWT_ACCESS_TOKEN_EXPIRATION` | Access token expiration | `15m` |
| `JWT_REFRESH_TOKEN_EXPIRATION` | Refresh token expiration | `7d` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `PORT` | Server port | `3000` |
| `API_PREFIX` | API route prefix | `api` |
| `CORS_ORIGIN` | Allowed CORS origins (comma-separated) | `http://localhost:5173` |
| `BCRYPT_ROUNDS` | Bcrypt salt rounds | `12` |
| `MINIO_ENDPOINT` | MinIO server endpoint | `localhost` |
| `MINIO_PORT` | MinIO server port | `9000` |
| `MINIO_USE_SSL` | Use SSL for MinIO | `false` |
| `MINIO_ACCESS_KEY` | MinIO access key | `minioadmin` |
| `MINIO_SECRET_KEY` | MinIO secret key | `minioadmin` |
| `MINIO_BUCKET_NAME` | Default bucket name | `presentations` |

## Docker Commands

### Start Services
```bash
docker compose up -d
```

### Stop Services
```bash
docker compose down
```

### View Logs
```bash
docker compose logs -f backend
docker compose logs -f postgres
docker compose logs -f minio
```

### Rebuild and Restart
```bash
docker compose up -d --build
```

### Clean Up (Remove volumes)
```bash
docker compose down -v
```

## License

MIT

