# Step 1: Build Angular SSR App
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Angular app
RUN npm run build:ssr

# Step 2: Serve the app with Express
FROM node:18 AS production

# Set working directory for production
WORKDIR /app

# Copy only necessary files from build
COPY --from=build /app/dist/my-website /app/dist

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose port (default for SSR apps is 4000)
EXPOSE 4000
RUN ls -R /app/dist/server

# Start the Express server (Angular SSR)
CMD ["npm", "run", "serve:ssr"]
