FROM ubuntu
RUN apt update && apt install -y cowsay fortune
ENTRYPOINT ["/usr/games/cowsay"]

CMD ["hiii all"]
COPY entrypoint.sh /
# ENTRYPOINT ["/entrypoint.sh"]
 