/**
 * 投票テーブル抽出クラス
 * @author 土居幸太郎
 */

/**
 * 投票テーブル抽出関数
 * @author 土居幸太郎
 * @param eventid : イベントID
 * @returns {Promise}
 */

exports.getVote = function(eventid){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Votes = db.model('votes', schema.votes);

        //ログイン照合
        Votes.find({Eventid:eventid}, {'_id':0 },function(err, docs) {
            if (!err) {
                if (docs.length > 0) {
                    resolve(docs);
                } else {
                    console.log("getVote:"+"データがありません");
                    reject("投票部門が設定されていません。");
                }
            } else {
                console.log("getVote:"+"DB Error.");
                reject(err);
            }
        });

    });
};

exports.getVotejson = function(FINDJSON){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const votes = db.model('votes', schema.votes);

        votes.find(FINDJSON, {},function(err, docs) {
            if (!err) {
                if (docs.length >= 1) {
                    console.log("getVote:"+"データがあります");
                    console.log( + FINDJSON + "は" + docs.length+"件見つかりました");
                    for(var i=0; i<docs.length;i++){
                      console.log(docs[i]);

                    }
                    resolve(docs);
                  }else{
                      console.log(docs.length);
                    console.log("getVote:"+FINDJSON+"で検索しましたが"+"データがありません");
                    resolve(docs);
                  }
                } else {
                  console.log("getVote:"+"DB Error.");
                  reject("DB ERROR");
                }
               });
           });
         }
