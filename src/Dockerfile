FROM node:latest
LABEL maintainer="sretthaterananont@gmail.com"
ADD . /app
WORKDIR /app/server
RUN npm install --production
CMD ["node", "app.js"]