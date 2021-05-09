FROM node:lts-alpine
COPY ./dist/apps/api .
RUN npm install --production
CMD node ./main.js