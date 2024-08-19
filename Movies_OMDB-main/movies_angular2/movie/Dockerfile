# Stage 1: Build the Angular application
#FROM node:18-buster AS build

# Set working directory
#WORKDIR /app

# Install Angular CLI globally
#RUN npm install -g @angular/cli@latest

# Install dependencies
#COPY package*.json ./
#RUN npm install

# Copy source files
#COPY . .

# Build Angular app and keep container running
#RUN npm run build || tail -n 50 /tmp/ng-*/angular-errors.log
#-----------------------------------------------------------docker-compose.yml

# Stage 1: Build the Angular application
FROM node:18-buster AS build

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@latest

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build Angular app and keep container running
RUN npm run build || tail -n 50 /tmp/ng-*/angular-errors.log

# Expose the Angular app port
EXPOSE 4200

# Start the application
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
