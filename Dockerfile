FROM ubuntu
MAINTAINER Kush, kushkumarsingh@live.com

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install build-essential -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    apt-get update && \
    apt-get clean

WORKDIR /home/app
COPY . .

VOLUME [ "/tmp/torrent-stream" ]
EXPOSE 6881 9000

CMD [ "npm", "start" ]
