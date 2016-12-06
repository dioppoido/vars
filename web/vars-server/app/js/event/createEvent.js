/**
 * イベント追加処理
 * @author 山口
 * @param eventid : イベントID
 * @param eventname : イベントネーム
 * @param overview : イベントの概要
 * @param createstart :　チーム作成期間（はじまり）
 * @param createfinish :　チーム作成期間（おわり）
 * @param votestart :　投票期間（はじまり）
 * @param votefinish :　投票期間（おわり）
 * @returns {Promise}
 */

exports.createEvent = function(eventid,eventname,overwiew,createstart,createfinish,votestart,votefinish){
  return new Promise(function (resolve, reject ) {

    //random関数の使用
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const events = db.model('events', schema.events);
    // event create
    const events_model = new events({Eventid:eventid,
                                     Eventname:eventname,
                                     Overview:overwiew,
                                     Createperiod:{
                                       Createstart   :createstart,
                                       Createfinish  :createfinish
                                     },
                                     Voteperiod:{
                                       Votestart     :votestart,
                                       Votefinish    :votefinish
                                     }
    });
    events_model.save( function(err) {
      //log check
      if(!err){
        console.log("データが挿入されました");
        events.find({Eventid:eventid},{},function(err,docs){
        if(docs === 1 )console.log(docs);
        });
      }

    });
  });
};
