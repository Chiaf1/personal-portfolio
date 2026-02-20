FROM node:25-alpine3.22

WORKDIR /app

RUN npm install -g pnpm@latest-10