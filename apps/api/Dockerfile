FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
RUN npm install --production
CMD node ./main.js