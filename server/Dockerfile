# Create image based on the official Node 10 image from dockerhub
FROM node:15.13-alpine as builder

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

ARG APP_SERVER_PORT

ENV PORT $APP_SERVER_PORT

# Start the node server
CMD ["npm", "run", "dev"]
