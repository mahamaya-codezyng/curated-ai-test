# Use official Node.js image as a base
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React application
RUN npm run build

# Move into the build directory
WORKDIR /app/build

# Install `serve` globally to serve the React app
RUN npm install -g serve

# Expose port 1111 inside the container
EXPOSE 1111

# Command to run the React app using serve
CMD ["serve", "-s", ".", "-l", "1111"]
