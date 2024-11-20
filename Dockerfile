# Use official Node.js image as a base
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the build folder into the container
COPY build/ /app

# Install `serve` globally to serve the React app
RUN npm install -g serve

# Expose port 1111 inside the container (the port React app runs on)
EXPOSE 1111

# Command to run the React app using serve
CMD ["serve", "-s", ".", "-l", "1111"]
