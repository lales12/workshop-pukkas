# Nuestra primera imagen

## Crear imagen

```
docker build -t test/cowsay .
```
La opción -t crear la imagen y le añade una etiqueta 


## Ejecutar la imagen

```
docker run test/cowsay cowsay
```

## Añadimos el comando a ejecutar
```
CMD /usr/games/fortune | /usr/games/cowsay
```