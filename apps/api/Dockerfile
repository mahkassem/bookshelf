# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies 
# You can use --production if you don't need devDependencies in production and taking workspaces into account
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 4000

# Set the non-root user to run the app
USER node

# Start the Next.js application
CMD ["npm", "start"]
