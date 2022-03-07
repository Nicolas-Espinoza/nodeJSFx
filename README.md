# nodeJSFx

### Una vez clonado el repo, ejecutar:

```
npm install
```

### Posteriormente crear un env del siguiente estilo:


```
PORT=9090
NODE_ENV=deb
MONGO_URL=mongodb://localhost:27017
API_URL=http://data.fixer.io/api/latest
API_KEY=
DATABASE_NAME=
```

### Para probar el endpoint a nivel local:

```
Peticion de tipo GET a 
http://localhost:9090/api/par?base=usd&cotiza=arg
```

#### recordar que para ver un par en especial por ejemplo EUR/USD debo enviar mediante queryParams
#### base=eur&cotiza=usd
