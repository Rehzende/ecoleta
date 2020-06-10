FROM node:12-alpine AS build
WORKDIR /src
COPY . .
RUN npm install
RUN npm install -g expo-cli
RUN expo build:web



FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /src/web-build .
ADD ./nginx/nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80