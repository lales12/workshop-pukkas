# Docker-compose

Nos facilita el entorno de desarrollo y nos permite tener toda la infraestructura en un solo fichero

redis-cli -h 06-docker-compose_redis-server_1

## Conectarse con otra maquina

```
docker attach 06-docker-compose_redis-cli_1
redis-cli -h 06-docker-compose_redis-server_1
```