#!/bin/sh
set -e

echo "Running database migrations..."
npm run migration:run:prod || {
  echo "Migration failed or no migrations to run. Continuing..."
}

echo "Starting application..."
exec node dist/main.js

