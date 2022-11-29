# syntax=docker/dockerfile:1

FROM node:16-alpine

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
# FROM base AS builder

EXPOSE 6060
# ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", ".babelrc", "tsconfig.json", "nodemon.json", "yarn.lock", ".env", "./"]
# RUN npm install --location=global yarn
RUN yarn
RUN yarn add ts-node-dev --save
COPY . .
CMD [ "yarn", "dev" ]