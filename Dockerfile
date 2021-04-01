# BUILD
FROM node:14.7.0-alpine3.10 AS BUILD

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# HOST
FROM nginx:1.19.9-alpine

COPY --from=BUILD /app/build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
