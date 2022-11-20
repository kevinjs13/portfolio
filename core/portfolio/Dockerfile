## BASE
FROM node:18 as base
WORKDIR /app/core/portfolio
# latest yarn v1
RUN npm i -g --force yarn
# Yarn v2
# RUN yarn set version berry
# copy only deps to leverage docker layering
COPY package.json *yarn* /app/
COPY core/portfolio/package.json /app/core/portfolio/
RUN yarn install --frozen-lockfile --silent

## DEV
FROM base as dev
COPY . /app

## CODE QA
FROM base as qa
WORKDIR /app/core/portfolio
COPY --from=dev /app /app
RUN yarn lint
RUN yarn test --coverage --watchAll=false --ci

## BUILD
FROM base as build
WORKDIR /app/core/portfolio
COPY --from=dev /app /app
RUN yarn build

FROM nginx:alpine as production
WORKDIR /app/core/portfolio
COPY --from=build /app/package.json /app/*yarn* /app/
COPY --from=build /app/core/portfolio/package.json /app/core/portfolio/
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/core/portfolio/node_modules /app/core/portfolio/node_modules
COPY --from=build /app/core/portfolio/dist /app/core/portfolio/dist
COPY --from=build /app/core/portfolio/ecosystem.config.js /app/core/portfolio/
RUN yarn global add pm2
CMD ["yarn", "start"]
