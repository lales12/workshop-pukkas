# ENTRYPOINT, CMD, RUN

## Jugando con ENTRYPOINT
```
docker build -t test/cowsay-dockerfile . 
docker run test/cowsay-dockerfile "Moo"
```

## ENTRYPOINT cons script

Decomentamos el codigo