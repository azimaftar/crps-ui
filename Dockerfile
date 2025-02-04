# Use Node.js 20 with Alpine as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /fe-angular

# Copy all project files to the container's working directory
COPY . /fe-angular

# Install dependencies
RUN npm install --legacy-peer-deps

# Generate SSL certificates for HTTPS (for development only)
# RUN apk add --no-cache openssl && \
#    openssl req -nodes -new -x509 -keyout server.key -out server.crt -subj "/CN=localhost"

# Remove .git hidden folder if it exists
RUN rm -rf ./.git

# Expose the application port
EXPOSE 4200

# Start the application
# CMD ["npm", "start"]
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
