FROM node:20.15.0 AS build

WORKDIR /app

RUN npm cache clean --force

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine AS ngi

COPY --from=build /app/dist/browser/pt /usr/share/nginx/html
COPY --from=build /app/dist/browser/en-US /usr/share/nginx/html/en-US
COPY nginx.conf  /etc/nginx/conf.d/default.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 80