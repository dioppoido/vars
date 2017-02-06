var express = require('express');
var router = express.Router();
var getField = require("../app/js/field/getField");
var getEventList = require("../app/js/event/getEventList.js");//すべてのイベント抽出
var inSessionEventList = require("../app/js/event/inSessionEventList.js");//すべてのイベント抽出より開催イベントの抽出
var todate = require("../app/js/moment/moment.js");
var async = require('async');

/**
 * ログイン情報があるか確認する(session)
 * ログイン情報がなければlogin.jsへ遷移、あればindex.ejsへ遷移
 * req.session.user : session内ユーザーID情報
 */
const loginCheck = function(req, res, next) {
  if(req.session.user){
    next();
  }else{
    res.redirect('/login');
  }
};

router.get('/', loginCheck, function(req, res) {
  getEventList.getEventList().then(function (docs){
    //一つでもイベントがある場合
    console.log(docs);
    if(docs!=null){
      var fieldlist = [];
      var inSessionEvent=inSessionEventList.inSessionEventList(todate.todate("YYYY-MM-DD HH:mm:ss"),docs,2);
      async.eachSeries(inSessionEvent,function(data,next){
        getField.getSingleField(data.Fieldid).then(function (docs) {
            fieldlist.push(docs[0].Fieldname);
            // console.log(inSessionEvent);
            next();
        });
      }, function complete(err) {
        if(!err){
          if(inSessionEvent.length===0){
            res.render('index.ejs',{user: req.session.user,notFound:null});
          }else{
          res.render('index.ejs',{user: req.session.user,inSessionEventList:inSessionEvent,notFound:docs,fieldlist:fieldlist});
        }
        }
      });
      //一つもイベントがない場合
    }else{
      res.render('index.ejs',{user: req.session.user,notFound:null});
    }
  }).catch(function(){
    res.render('index.ejs',{user: req.session.user,notFound:null});    
  });

});

module.exports = router;
