#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd `dirname $0`

# jsファイルをMongoに読み込ませる
for file in `\find . -regex ".*\.js" -maxdepth 1 -type f` ; do
  echo $file
  mongo < $file
done
