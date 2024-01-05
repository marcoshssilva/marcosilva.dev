# marcoshssilva-com-br

Website deployed at [marcoshssilva.com.br](https://marcoshssilva.com.br)

## How to Run

Follow commands:
```
npm ci && npm run start
```

> Run as Development Mode
```
npm run dev
```

> Run using Docker container
```
docker build --tag marcoshssilva-website:latest .
docker run -it -p 3000:3000 --name marcoshssilva-website marcoshssilva-website:latest
```

After you can open in browser at [http://localhost:3000](http://localhost:3000)
