docker-compose build

docker tag docs_vuepress hackxing/documents:latest

docker push hackxing/documents:latest

docker run -P -d --name docs hackxing/documents