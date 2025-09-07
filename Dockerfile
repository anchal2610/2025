# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port (change if your app uses another port)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
