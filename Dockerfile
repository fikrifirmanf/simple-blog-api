FROM node:16-slim

RUN apt-get update && apt-get install -y

RUN mkdir /app
WORKDIR /app
COPY package*.json .

RUN npm ci
COPY . .
CMD ["npm","start"]