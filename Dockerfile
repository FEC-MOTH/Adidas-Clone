FROM node:10

WORKDIR WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ARG DB_USER_DEVELOPMENT
ENV DB_USER_DEVELOPMENT root

ARG DB_PASS_DEVELOPMENT
ENV DB_PASS_DEVELOPMENT example

ARG DB_NAME_DEVELOPMENT
ENV DB_NAME_DEVELOPMENT shoedidas_header

ARG DB_HOSTNAME
ENV DB_HOSTNAME db

ARG HOSTNAME 
ENV HOSTNAME ec2-54-147-175-157.compute-1.amazonaws.com

ARG PORT
ENV PORT 80

ARG CDN_ROOT
ENV CDN_ROOT https://s3-us-west-1.amazonaws.com/shoedidas-static

RUN npm run build
RUN npm run seed

CMD ["npm", "start"]