# base
FROM node:18 AS base
CMD ["bash"]

# setup
FROM base AS setup
COPY . /workspace
WORKDIR /workspace
RUN npm install

# test
FROM setup AS test
RUN npm run test

# build
FROM test AS build
RUN npm run build

# production
FROM nginx:latest AS production
COPY --from=build /workspace/build /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
