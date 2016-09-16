#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd `dirname $0`

# コンテナを再起動する
docker-compose restart &
