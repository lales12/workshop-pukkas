# Volumenes

Los volúmenes sirven para tener datos persistente en nuestras imagenes docker o bien compartir datos entre nuestras imagenes

## Ver volumenes 
```
docker volume ls
```

## Crear volumen

```
docker volume create persistent-data
```

## Attach volumen a container
```
docker run -v persistent-data test/nginx --name test-persistent-data
## Adding content
docker exec -ti test-persistent-data bash
touch persistent-data/test-file
echo 'some text' > persistent-data/test-file
```

## Compartir datos entre el host y el container
```
docker run -d -v /host/dir:/container/dir test/nginx
```
