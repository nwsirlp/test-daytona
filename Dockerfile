FROM node:alpine as builder

WORKDIR /app

COPY package.json /app/ 

COPY . . 

RUN #npm install --legacy-peer-deps 

EXPOSE 8080

CMD ["npm", "start"]
