FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./ 

RUN #npm install --legacy-peer-deps app

COPY . . 

EXPOSE 8080

CMD ["node", "index.js"]
