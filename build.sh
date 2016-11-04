#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd `dirname $0`

# コンテナが動作していれば停止させる
docker-compose stop

# コンテナが存在していれば削除する
docker-compose rm -f

# Dockerfileをビルドする
docker-compose build
