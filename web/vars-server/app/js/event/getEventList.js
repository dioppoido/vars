/**
 * イベント抽出クラス
 * @author 山口
 * @param eventname : イベント名
 */

exports.getEventList = function(tag){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Events = db.model('events', schema.events);
        //イベントリストオール抽出
        if(tag==null){
          Events.find({}, {}, {sort:{Cource:-1}} ,function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                }
            });
        }
        //コース別抽出
        if(tag!=null){
          Events.find({Course:tag}, {}, {sort:{Cource:-1}} ,function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                }
            });
        }
    });
};
