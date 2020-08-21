# Elasticsearch

## 使用方法

```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.8.1
docker run -p 9200:9200 --name elasticsearch -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.8.1
```

## Dockerfile

<https://github.com/docker-library/docs/tree/master/elasticsearch>