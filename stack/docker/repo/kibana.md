# Kibana

## 使用方法

```bash
docker pull docker.elastic.co/kibana/kibana:7.8.1
docker run -p 5601:5601 --name kibana --link 14e385b1e761:elasticsearch -e "elasticsearch.hosts=http://127.0.0.1:9200" -d docker.elastic.co/kibana/kibana:7.8.1
```

## Dockerfile

<https://github.com/docker-library/docs/tree/master/kibana>