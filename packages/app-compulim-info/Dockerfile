FROM node:alpine AS builder
WORKDIR /builder/
ADD . /builder/
RUN npm install
RUN npm run build

FROM node:alpine
LABEL name="app-compulim-info" version="1.0.0"
EXPOSE 4001
ENTRYPOINT npx --no-install serve . --listen 4001
WORKDIR /webapp/
RUN npm install serve@9 -g
COPY --from=0 /builder/build/ /webapp/
COPY --from=0 /builder/serve.json /webapp/
