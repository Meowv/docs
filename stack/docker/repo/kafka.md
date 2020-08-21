# Kafka

```bash
docker pull wurstmeister/kafka
docker run -d --name kafka --publish 9092:9092 --link zookeeper --env KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 --env KAFKA_ADVERTISED_HOST_NAME=192.168.1.111 --env KAFKA_ADVERTISED_PORT=9092 wurstmeister/kafka
```
