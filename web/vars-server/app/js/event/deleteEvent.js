/**
 * イベント削除
 * @author 山口
 * @returns {Promise}
 */

 exports.deleteEvent = function(json){
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const events = db.model('events', schema.events);
     var msg="";   //返り値（メッセージ）
     //イベント削除
     events.remove(json,function(err) {
         if (!err) {
           console.log("event削除しましたよ");
         } else {
             console.log("deleteEvent:" + "DB Error.");
         }
     });
 };
