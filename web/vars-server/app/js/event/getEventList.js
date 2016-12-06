/**
 * イベント抽出クラス
 * @author 山口
 * @param tag : 分野名
 */

exports.getEventList = function(tag){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Events = db.model('events', schema.events);
        console.log("getEventList遷移");
        //イベントリストオール抽出　引数なし
        if(tag==null){
          Events.find({}, {},{sort:{Date:1}},function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                    console.log("getEventList正常処理完了");
                } else {
                reject();
              }
            });
        }
        //分野別抽出 引数がある場合
        if(tag!=null){
          Events.find({Fieldid:tag}, {},{sort:{Date:1}},function(err, docs){
                if (docs.length >= 1) {
                    resolve(docs);
                } else {
                  resolve(err);
                }
            });
        }
    });
};

  // var inSessionEvent=inSessionEventList.inSessionEventList(todate.todate("YYYY-MM-DD HH:mm:ss"),docs1,2);
