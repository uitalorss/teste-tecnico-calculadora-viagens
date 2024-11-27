FROM node:18-alpine3.20 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS production

RUN mkdir -p /var/www/html

COPY --from=build /app/dist* /var/www/html

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/nginx.conf /etc/nginx/conf.d