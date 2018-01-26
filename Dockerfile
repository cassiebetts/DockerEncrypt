FROM node:8.9.4-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json /usr/app/
RUN npm install
