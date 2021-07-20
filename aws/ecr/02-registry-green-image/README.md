# AWS ECR

Este paso ya lo tenemos realizado
Hacemos login para poder subir las imagenes de docker al repositorio, muy importante mantener siempre la misma region

```
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 063051601163.dkr.ecr.us-west-2.amazonaws.com
```

## Construimos la imagen
```
docker build -t pukkas-workshop:latest .
```
## Ponemos el tag correcto para la versioon

```
docker tag pukkas-workshop:latest 063051601163.dkr.ecr.us-west-2.amazonaws.com/pukkas-workshop:latest
```

## como podemos probar la imagen en local?


## Hacemos el push en el repositorio 
```
docker push 063051601163.dkr.ecr.us-west-2.amazonaws.com/pukkas-workshop:latest
```