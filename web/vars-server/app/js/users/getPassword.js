/**
 * パスワード抽出クラス
 * @author 山口
 * @param userid : ユーザーID
 * @returns {Promise}
 */
exports.getPassword = function(userid){
  return new Promise(function (resolve, reject) {
      const mongoose = require('mongoose');
      const db = mongoose.createConnection('mongodb://mongo/vars');
      const schema = require('../db/schema');
      const getPassword = db.model('users', schema.users);

      //パスワード抽出
      getPassword.find({Userid:userid}, {'_id':0,"Userid":0 },function(err, docs) {
          if (!err) {
              if (docs.length === 1) {
                  resolve(docs);
              } else {
                  console.log("getPassword:"+"データがありません");
                  reject("Date NotFound");
              }
          } else {
              console.log("getPassword:"+"DB Error.");
              reject("DB ERROR");
          }
      });

  });
};
