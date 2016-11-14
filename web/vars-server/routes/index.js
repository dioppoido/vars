var express = require('express');
var router = express.Router();
var getEventList = require("../app/js/event/getEventList.js");//すべてのイベント抽出
var inSessionEventList = require("../app/js/event/inSessionEventList.js");//すべてのイベント抽出より開催イベントの抽出
var todate = require("../app/js/moment/moment.js");

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
    if(docs!=null){
      var inSessionEvent=inSessionEventList.inSessionEventList(todate.todate("YYYY/MM/D"),docs,1);
      res.render('index.ejs',{user: req.session.user,inSessionEventList:inSessionEvent,notFound:docs});
      //一つもイベントがない場合
    }else{
      res.render('index.ejs',{user: req.session.user,notFound:null});
    }
  });

});

module.exports = router;
