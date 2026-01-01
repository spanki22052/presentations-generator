# Build stage
FROM node:20.11-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Create non-root user
RUN addgroup -g 1001 appgroup && \
    adduser -D -u 1001 -G appgroup appuser

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source code
COPY --chown=appuser:appgroup . .

# Build application
RUN npm run build

# Production stage
FROM node:20.11-alpine AS runner

# Create non-root user
RUN addgroup -g 1001 appgroup && \
    adduser -D -u 1001 -G appgroup appuser

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy package files for production install
COPY --from=builder --chown=appuser:appgroup /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist

# Copy startup script
COPY --from=builder --chown=appuser:appgroup /app/start.sh ./start.sh

# Create healthcheck script
RUN echo 'const http = require("http"); \
const options = { \
  hostname: "localhost", \
  port: process.env.PORT || 3000, \
  path: "/api/health", \
  method: "GET", \
  timeout: 2000 \
}; \
const req = http.request(options, (res) => { \
  process.exit(res.statusCode === 200 ? 0 : 1); \
}); \
req.on("error", () => process.exit(1)); \
req.on("timeout", () => { req.destroy(); process.exit(1); }); \
req.end();' > healthcheck.js && \
chmod +x healthcheck.js && \
chown appuser:appgroup healthcheck.js && \
chmod +x start.sh

# Drop privileges
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node healthcheck.js || exit 1

EXPOSE 3000

CMD ["sh", "start.sh"]

