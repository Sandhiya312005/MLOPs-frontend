# Use official Node.js image as base
FROM node
# Set the working directory in the container
WORKDIR /frontend
# Copy the frontend source code to the working directory
COPY . .
# Install dependencies
RUN npm install
# Expose port 3000 to the outside world
EXPOSE 3000
# Command to run the frontend server
CMD ["npm", "start"]