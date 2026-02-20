FROM node:25-alpine3.22

WORKDIR /app

COPY package.json .

COPY  pnpm-lock.yaml .

RUN npm install -g pnpm@latest-10

ENV CI=true

RUN pnpm install

COPY . .

CMD [ "pnpm", "dev" ]