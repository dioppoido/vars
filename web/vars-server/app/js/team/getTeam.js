/**
 * teamList抽出クラス
 * @author 山口
 */

 exports.getTeam = function(eventid){
   return new Promise(function (resolve,reject) {
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const getTeam = db.model('teams', schema.teams);

     //team name 抽出
     getTeam.find({Eventid:eventid},{},function(err,docs){
        if(!err){
          if(docs.length>=1){
            console.log("getTeam:"+"データがあります");
            console.log("Eventid" + docs[0].Eventid + "は" + docs.length+"件見つかりました");
            for(var i=0; i<docs.length;i++){
              console.log(docs[i]);
            }
            resolve(docs);
          }else{
            console.log("getTeam:"+"データがありません");
            reject("チームが存在しません。");
          }
        } else {
          console.log("getTeam:"+"DB Error.");
          reject("DB ERROR");
        }
       });
   });
 }

 /**
 *getTeamjson関数
 *作成者：多田
 */

exports.getTeamjson = function(FINDJSON){
  return new Promise(function (resolve,reject) {
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const getTeam = db.model('teams', schema.teams);

    getTeam.find(FINDJSON,{},function(err,docs){
       if(!err){
         if(docs.length>=1){
           console.log("getTeam:"+"データがあります");
           console.log( + FINDJSON + "は" + docs.length+"件見つかりました");
           for(var i=0; i<docs.length;i++){
             console.log(docs[i]);

           }
           resolve(docs);
         }else{
           console.log("getTeam:"+"データがありません");
           resolve(docs);
         }
       } else {
         console.log("getTeam:"+"DB Error.");
         reject("DB ERROR");
       }
      });
  });
}
