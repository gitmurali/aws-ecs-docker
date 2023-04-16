FROM --platform=linux/amd64 node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "index.js"]
EXPOSE 3000