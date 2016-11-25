var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var insertTeam =  require("../app/js/team/insertTeam");
var randomByte = require("../app/js/db/randomByte");
var multer  = require('multer');
var rename = require('../app/js/image/rename');
var moment = require('../app/js/moment/moment');
var getField = require("../app/js/field/getField");
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        var eventid=req.query.eventid;
        res.render('teamcreate.ejs',{
          displayName: req.session.user.displayName,
          address: req.session.user.address,
          eventid:eventid
        });
    } else{
        res.redirect('/');
    }

});

var upload = multer({ dest: 'upfile/' });
router.post('/', upload.single('thumbnail'), function (req, res) {
    if(req.session.user){
          var teamname=req.body.teamname;
          var teamid=randomByte.randomByte();//変更必要あり;
          var eventid=req.body.eventid;
          var systemname=req.body.systemname;
          var overview=req.body.overview;
          var displayname=req.session.user.displayName;
          var address=req.session.user.address;
          var imagepath="";
      //DBに入れ込む処理を呼び出す
          if(req.file){
            var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
            var imageExtension =rename.rename(extension);　//拡張子
            imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
            require('fs').rename(req.file.path, 'upfile/' + req.file.filename + imageExtension); //ここでファイル名を変更
          }else{
            imagepath="public/images/noimage.png"  //NoImageのPathをここに格納
          }
          // 送る値をJSON形式で記述
          const TEAMS = {
            'Teamname'    :teamname,
            'Teamid'      :teamid,
            'Eventid'     :eventid,
            'Systemname'  :systemname,
            'Overview'    :overview,
            'displayName' :displayname,
            'Address'     :address,
            'Image'       :imagepath
          };
          insertTeam.insertTeam(TEAMS);   //チーム作成
          var msg = "チームを作成しました。";   //作成時メッセージ
          res.render('confirmation.ejs' , {msg:msg, url:''});
      }else{
          res.redirect('/');
      }

  });

  module.exports = router;
