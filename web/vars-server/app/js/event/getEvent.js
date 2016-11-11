/**
 * イベント抽出クラス
 * @author 川西
 * @param eventname : イベント
 */

exports.getEvent = function(eventid){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Event = db.model('events', schema.events);


        Event.find({Eventid:eventid}, {'_id':0 },function(err, docs) {
            if (!err) {
                if (docs.length === 1) {
                    resolve(docs);
                } else {
                    console.log("getEvent:"+"DataNotFound");
                    reject();
                }
            } else {
                console.log("getEvent:"+"DB Error.");
                reject();
            }
        });

    });
};
