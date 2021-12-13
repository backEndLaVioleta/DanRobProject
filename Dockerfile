FROM node:latest

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package* /usr/src/app/
COPY --chown=node:node ./dist ./dist

RUN npm ci --only=production

CMD ["npm","run","start:prod"]