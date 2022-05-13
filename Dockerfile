FROM "node:18-alpine"

RUN npm i -g create-react-app

WORKDIR /usr/src/app