# Base
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@latest

# Dependencies layer (to optimize cache)
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build stage
FROM deps AS builder
COPY . .
RUN pnpm run build

# Production
FROM node:20-alpine AS production
WORKDIR /app
RUN npm install -g pnpm@latest
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./

CMD ["node", "dist/main.js"]
