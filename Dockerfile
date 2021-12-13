FROM node:latest


WORKDIR /usr/src/app

COPY --chown=node:node package* /usr/src/app/
COPY --chown=node:node ./dist ./dist

USER node

RUN npm ci --only=production

CMD ["npm","run","start:prod"]