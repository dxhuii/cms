# 文档站（VitePress）构建镜像
FROM node:24-slim AS build
RUN npm i -g pnpm@10.30.2
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm -C docs run docs:build

FROM nginx:alpine
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html
RUN printf 'server {\n    listen 80;\n    root /usr/share/nginx/html;\n    index index.html;\n    location / { try_files \ \.html \/ =404; }\n}\n' > /etc/nginx/conf.d/default.conf
