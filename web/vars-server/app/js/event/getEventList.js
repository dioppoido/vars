/**
 * イベント抽出クラス
 * @author 山口
 * @param tag : コース名
 */

exports.getEventList = function(tag){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Events = db.model('events', schema.events);
        //イベントリストオール抽出　引数なし
        if(tag==null){
          Events.find({}, {}, function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                } else {
                reject();
              }
            });
        }
        //コース別抽出 引数がある場合
        if(tag!=null){
          Events.find({Fieldid:tag}, {},function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                } else {
                  resolve(err);
                }
            });
        }
    });
};
