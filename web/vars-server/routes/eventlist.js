var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getField = require("../app/js/field/getField");
var getEventList = require("../app/js/event/getEventList.js");//すべてのイベント抽出
var inSessionEventList = require("../app/js/event/inSessionEventList.js");//すべてのイベント抽出より開催イベントの抽出
var closedEventList = require("../app/js/event/closedEventList.js");//すべてのイベント抽出より閉鎖イベントの抽出
var todate = require("../app/js/moment/moment.js");
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        getField.getField().then(function (docs) {    //分野取得
            getEventList.getEventList(req.query.fieldid).then(function (docs1){
                //一つでもイベントがある場合
                if(docs1!=null){
                    var inSessionEvent=inSessionEventList.inSessionEventList(todate.todate("YYYY/MM/D"),docs1);
                    var closedEvent=closedEventList.closedEventList(todate.todate("YYYY/MM/D"),docs1);
                    res.render('eventlist.ejs',{field:docs,notFound:docs1,inSessionEventList:inSessionEvent,closedEventList:closedEvent});
                //一つもイベントがない場合
                }else{
                    res.render('eventlist.ejs',{field:docs,notFound:null});
                }
            });
        });
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {

});

module.exports = router;
