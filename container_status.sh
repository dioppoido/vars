#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd `dirname $0`

# コンテナの状態を確認する
docker-compose ps
