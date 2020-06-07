FROM node:12-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run-script build


FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /src/build .
ADD ./nginx/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80