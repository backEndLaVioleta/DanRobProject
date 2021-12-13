FROM node:latest

WORKDIR /usr/src/app

COPY --chown=node:node package* /usr/src/app/
COPY --chown=node:node ./dist ./dist

RUN npm ci --only=production

USER node

CMD ["npm","run","start:prod"]