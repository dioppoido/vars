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
                    resolve("");
                }
            } else {
                console.log("getVote:"+"DB Error.");
                reject("");
            }
        });

    });
};