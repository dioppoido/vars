#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd `dirname $0`

# コンテナが動作していれば停止させる
docker-compose stop

# コンテナが存在していれば削除する
docker-compose rm -f

# コンテナを起動する
docker-compose up &

# データベースのスクリプトファイルを読み込ませる
sleep 3s
docker exec sams_mongo /bin/bash /docker/scripts/initdb.sh
