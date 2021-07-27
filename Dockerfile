FROM debashishub/node-ubuntu

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV NODE_ENV development

EXPOSE 5000 3000


CMD ["npm", "start"]