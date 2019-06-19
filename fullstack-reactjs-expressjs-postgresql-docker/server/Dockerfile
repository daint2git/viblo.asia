FROM node:10-alpine

RUN mkdir /usr/app
WORKDIR /usr/app
COPY package.json .
RUN yarn
COPY . .

CMD ["yarn", "start"]
