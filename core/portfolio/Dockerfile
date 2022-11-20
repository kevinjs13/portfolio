## BASE
FROM node:18 as base
WORKDIR /app/core/shell
# latest yarn v1
RUN npm i -g --force yarn
# Yarn v2
# RUN yarn set version berry
# copy only deps to leverage docker layering
COPY package.json *yarn* /app/
COPY core/shell/package.json /app/core/shell/
RUN yarn install --frozen-lockfile --silent

## DEV
FROM base as dev
COPY . /app
