/**
 * イベント名抽出クラス
 * @author 川西
 * @param eventname : イベント名
 */

exports.getEvent = function(eventid){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Event = db.model('events', schema.events);

        //ログイン照合
        Event.find({Eventid:eventid}, {'_id':0 },function(err, docs) {
            if (!err) {
                if (docs.length === 1) {
                    resolve(docs);
                } else {
                    console.log("getEvent:"+"データがありません");
                    resolve("");
                }
            } else {
                console.log("getEvent:"+"DB Error.");
                resolve("");
            }
        });

    });
};
