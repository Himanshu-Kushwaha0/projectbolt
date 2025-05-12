# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy website source code
COPY . .

# Expose the port (Vite default: 5173)
EXPOSE 5173

# Start the website
CMD ["npm", "run", "dev"]

