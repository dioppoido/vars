/**
 * チーム削除
 * @author 山口
 * @returns {Promise}
 */

 exports.deleteTeam = function(json){
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const teams = db.model('teams', schema.teams);
     var msg="";   //返り値（メッセージ）
     //イベント削除
     teams.remove(json,function(err) {
         if (!err) {
           console.log("チーム削除しましたよ");

         } else {
             console.log("deleteTeams:" + "DB Error.");
         }
     });

 };
