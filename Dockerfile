FROM node:12.13.0-alpine
LABEL maintainer="Anton Zolotukhin"
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run styles
CMD ["npm", "start"]
EXPOSE 5000