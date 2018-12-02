FROM node:10

WORKDIR WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG HOSTNAME 
ENV HOSTNAME localhost

ARG PORT 
ENV PORT 3000

ARG CDN_ROOT
ENV CDN_ROOT https://s3-us-west-1.amazonaws.com/shoedidas-static

RUN npm run build

CMD ["npm", "start"]