FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine As nginx
COPY --from=builder /app/build ./usr/share/nginx/html
COPY /nginx/conf.d/default.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
