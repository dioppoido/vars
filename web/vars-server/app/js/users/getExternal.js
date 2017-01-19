/**
 * ユーザー抽出
 * @author 山口
 * @returns {Promise}
 */

 exports.getExternal = function(JSON,SORT){
   return new Promise(function (resolve,reject) {
     const mongoose = require('mongoose');
     const db = mongoose.createConnection('mongodb://mongo/vars');
     const schema = require('../db/schema');
     const users = db.model('users', schema.users);

     users.find(JSON,{},SORT,function(err,docs){
        if(!err){
          if(docs.length>=1){
            console.log("getExternal:"+"データがあります");
            resolve(docs);
          }else{
            console.log("getExternal:"+"データがありません");
            resolve(docs);
          }
        } else {
          console.log("getExternal:"+"DB Error.");
          reject("DB ERROR");
        }
       });
   });
 }
