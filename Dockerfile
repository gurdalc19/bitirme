FROM node:16-alpine
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN yarn install && \
    yarn lint && \
    yarn build
CMD [ "npm", "start" ]
EXPOSE 8080
