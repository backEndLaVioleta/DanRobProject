FROM node:latest

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package* /usr/src/app/
COPY --chown=node:node ./dist ./dist

RUN npm install

CMD ["npm","run","start:prod"]