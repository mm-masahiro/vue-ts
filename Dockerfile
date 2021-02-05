FROM node:12.20.1-alpine

WORKDIR /src

RUN npm install --global @vue/cli

EXPOSE 9000
