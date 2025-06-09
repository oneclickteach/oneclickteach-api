FROM node:18-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@latest

# Development
FROM base AS development
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Production
FROM base AS production
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --production
COPY . .
RUN pnpm run build

# Production Alpine
FROM base AS production-alpine
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --production
COPY . .
RUN pnpm run build
