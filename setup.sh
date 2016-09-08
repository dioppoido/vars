#! /bin/bash

# sams-server に移動
cd $(dirname $0)/web/vars-server

echo 'installing node package...'
npm install
