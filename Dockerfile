FROM node:12-alpine AS app-base
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=app-base /app/.vuepress/dist/ /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]