# Networks

## Crear una red
```
docker network create pukkas 
docker network ls
```

## Crear container en una red

```
docker create --name nginx-on-network -p 8080:80 -P --network pukkas test/nginx
docker ps -a
docker start nginx-on-network
```

## Conectar container a una red

```
docker network connect pukkas test/nginx
docker network disconnect pukkas test/nginx
```

## Acceder a un container por nombre
```
docker build --tag ubuntu/curl .
docker run -it --rm --network pukkas ubuntu/curl /bin/sh
curl  nginx-on-network
```

El flag rm limpiara nuestro container una vez finalizemos

## Eliminar una red
```
docker network rm pukkas
```

