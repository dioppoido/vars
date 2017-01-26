/**
 * ユーザー削除
 * @author 山口
 * @returns {Promise}
 */

 exports.deleteExternal = function(JSON){
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const users = db.model('users', schema.users);
     var msg="";   //返り値（メッセージ）
     //イベント削除
     users.remove(JSON,function(err) {
         if (!err) {
          //  console.log("ユーザーを削除しましたよ");
         } else {
             console.log("deleteUser:" + "DB Error.");
         }
     });

 };
