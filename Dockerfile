FROM node:18-alpine

RUN #npm install -g pnpm

ARG NUXT_UI_PRO_LICENSE
ENV NUXT_UI_PRO_LICENSE=$NUXT_UI_PRO_LICENSE
ARG SITE_PORT
ENV SITE_PORT=$SITE_PORT
ARG NUXT_PUBLIC_SITE_URL
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
COPY core.mjs ./.output/server/node_modules/shiki/dist/

RUN npm install

COPY . .

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
