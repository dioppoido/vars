#! /bin/bash

# スクリプトの存在するディレクトリに移動
cd /home/vagrant/mongo/scripts

pwd
#　文字コード変換処理
sed -i 's/\r//'  *