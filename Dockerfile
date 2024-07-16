FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

ARG NUXT_UI_PRO_LICENSE
ENV NUXT_UI_PRO_LICENSE=$NUXT_UI_PRO_LICENSE
ARG SITE_PORT
ENV SITE_PORT=$SITE_PORT
ARG NUXT_PUBLIC_SITE_URL
ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./

# Use pnpm to install dependencies
RUN pnpm install --frozen-lockfile

COPY . .

# Build the application
RUN pnpm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# Uncomment the CMD
CMD ["node", ".output/server/index.mjs"]
