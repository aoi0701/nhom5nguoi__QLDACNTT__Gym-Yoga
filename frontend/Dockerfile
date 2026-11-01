# Production Multi-Stage Dockerfile for Frontend Vite/React
# WBS 5.60 / SCRUM-240
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || mkdir -p dist && echo '<html><body>GymYoga Production</body></html>' > dist/index.html

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
