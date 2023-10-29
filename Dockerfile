FROM node:lts as dependencies
WORKDIR /www
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /www
COPY . .
COPY --from=dependencies /www/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /www
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /www/next.config.js ./
COPY --from=builder /www/public ./public
COPY --from=builder /www/.next ./.next
COPY --from=builder /www/node_modules ./node_modules
COPY --from=builder /www/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]