FROM node:12
# Create app directory & set ownership on them to user 'node'
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Set working directory
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
# Ensure the current user is 'node'
USER node
# Install deps
RUN npm install --save-dev yarn
RUN /home/node/app/node_modules/.bin/yarn
# Copy app source code with appropriate permissions
COPY --chown=node:node . .
# Start application
CMD [ "npm", "start" ]
