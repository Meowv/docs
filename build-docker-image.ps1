docker-compose build --no-cache

docker tag docs_vuepress hackxing/documents:latest

docker push hackxing/documents:latest

docker stop docs
docker rm docs
docker run -P -d --name docs hackxing/documents
