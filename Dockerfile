FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./ 

RUN #npm install --legacy-peer-deps 

COPY . . 

EXPOSE 8080

CMD ["index.js"]
