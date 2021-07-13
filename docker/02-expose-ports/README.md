# Publicar puertos

```
docker build -t test/nginx .
```

## Ejecutar imagen

```
docker run -p 8080:80 test/nginx
```
La opción -p crear und bridge entre nuestro host y el container