# develop stage
FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
RUN npm install
COPY . ./app

# build stage
FROM develop-stage as build-stage
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY /.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage app/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]