# marcosilva-dev

Website deployed at [marcosilva.dev](https://marcosilva.dev)

## How to Run

Follow commands:
> Run using Node and Next.JS Server
```
npm ci && npm run build  && npm run start
```

> Run as Development Mode
```
npm ci && npm run dev
```

> Run using Docker Compose
```
npm run docker:build-image && npm run docker:run-compose
```

After you can open in browser at [http://localhost:3000](http://localhost:3000)

The contact form sends `{ name, mail, message }` as a JSON `POST` to the URL
configured in `NEXTJS_CONTACT_WEBHOOK_URL`. Additional headers can be configured
with comma-separated `key=value` pairs in `NEXTJS_CONTACT_WEBHOOK_HEADERS`, for
example `Auth=Foo, Header-API-KEY=Bar, Release=APP`.
