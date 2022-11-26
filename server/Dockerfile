# syntax=docker/dockerfile:1

FROM node:16.15.1

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
# FROM base AS builder

EXPOSE 6060
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", ".babelrc", "tsconfig.json", "nodemon.json", ".env", "./"]
RUN yarn
COPY . .
CMD [ "yarn", "dev" ]