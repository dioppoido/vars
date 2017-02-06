/**
 * 全て削除
 * @author 山口
 * @returns {Promise}
 */

 exports.format = function(){
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const aggregates = db.model('aggregates', schema.aggregates);
     const events = db.model('events', schema.events);
     const teams = db.model('teams', schema.teams);
     const votes = db.model('votes', schema.votes);


     var msg="";   //返り値（メッセージ）
     //イベント削除
     aggregates.remove({},function(err) {
         if (!err) {
           console.log("aggregatesすべて削除しました");
         }
          else {
             console.log("aggregates:" + "DB Error.");
         }
     });

     events.remove({},function(err) {
         if (!err) {
           console.log("eventsすべて削除しました");
         }
          else {
             console.log("events:" + "DB Error.");
         }
     });
    
     teams.remove({},function(err) {
         if (!err) {
           console.log("teamsすべて削除しました");
         }
          else {
             console.log("teams:" + "DB Error.");
         }
     });
     votes.remove({},function(err) {
         if (!err) {
           console.log("votesすべて削除しました");
         }
          else {
             console.log("votes:" + "DB Error.");
         }
     });

 };
