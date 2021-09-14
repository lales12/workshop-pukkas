# Esto es una aplicacion creada con create react app

Creatda con 

```
npx create-react-app 03-create-static-web --template typescript
```

npx permite ejecutar paquetes de npx como si estuvieran instalados de forma global 

## run dev server

```
npm run dev
```

## Build release 

```
npm run build
```

## Upload to s3 files

```
aws s3 cp ./build s3://pukkas-alex.com/release-1 --recursive
```

Check on the url if its working


## Update create react app setting home page path

Update the package .json with

```
"homepage": "/release-1",
```

