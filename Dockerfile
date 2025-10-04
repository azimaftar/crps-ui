# Step 1: Build Angular App
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --configuration=production

# Step 2: Serve with Nginx
FROM nginx:alpine AS serve
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/niise-application/browser .  
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
