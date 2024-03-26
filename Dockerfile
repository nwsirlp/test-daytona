FROM node:alpine as builder

WORKDIR /app

COPY ./package.json /app/

COPY . . 

RUN #npm install --legacy-peer-deps app

EXPOSE 8080

CMD ["./app"]
