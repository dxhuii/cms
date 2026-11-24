# syntax=docker/dockerfile:1
# 文档站（VitePress）容器化构建
FROM node:24-slim AS build
RUN npm i -g pnpm@10.30.2
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm -C docs run docs:build

FROM nginx:alpine
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
EOF
