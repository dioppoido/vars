/**
 * ファイル名変更関数
 * @author 多田涼太
 * @param extension : ファイルのオリジナルネーム
 * @returns {Promise}
 */

var express = require('express');
var multer  = require('multer')
var path = require('path');

//拡張子取得
exports.rename = function(extension){
   return path.extname(extension);//拡張子を取得してリターン

};
