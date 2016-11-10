//イベント一覧抽出テスト
var express = require('express');
var router = express.Router();
var getEventList = require('../app/js/event/getEventList');
var validator = require('validator'); //validatorモジュール宣言
//
router.get("/",function(req, res) {
      //event抽出
      getEventList.getEventList(req.body.tag).then(function (docs){
        for(var cnt=0; cnt<docs.length ;cnt++){
            var EVENTS=docs;
          };
          res.render('getEventList.ejs',{eventlist:EVENTS});
      });
});

router.post('/', function(req, res) {
  //event抽出
    getEventList.getEventList(req.body.tag).then(function (docs){
      for(var cnt=0; cnt<docs.length ;cnt++){
          var EVENTS=docs;
        };
        res.render('getEventList.ejs',{eventlist:EVENTS});
    });
});

module.exports = router;
