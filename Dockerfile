FROM node:18-alpine as builder
WORKDIR /web

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /web
COPY --from=builder /web/package.json .
COPY --from=builder /web/package-lock.json .
COPY --from=builder /web/next.config.js ./
COPY --from=builder /web/public ./public
COPY --from=builder /web/.next/standalone ./
COPY --from=builder /web/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["npm", "start"]