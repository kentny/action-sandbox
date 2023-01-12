# base
FROM node:18 AS base

# builder
FROM base AS builder
COPY . /workspace
WORKDIR /workspace
RUN npm install && \
    npm run build

# production
FROM nginx:latest AS production
COPY --from=builder /workspace/build /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
