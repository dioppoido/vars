var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var createEvent = require("../app/js/event/createEvent");
var randomByte = require("../app/js/db/randomByte");
var insertEvent = require("../app/js/event/insertEvent");
var multer  = require('multer');
var rename = require('../app/js/image/rename');
var moment = require('../app/js/moment/moment');
var getField = require("../app/js/field/getField");
var execSync = require('child_process').execSync; //twitter書き込み
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        if(req.session.user.admin) {
            getField.getField().then(function (docs) {    //分野取得
                res.render('eventcreate.ejs', {
                    user: req.session.user.displayName,
                    adress: req.session.user.address,
                    field: docs
                });
            }).catch(function(){
              res.render('eventcreate.ejs',{user: req.session.user});
            });
        }else{
            res.render('confirmation.ejs',{msg:"一般ユーザはこの機能を利用できません。",url:''});
        }
    } else{
        res.redirect('/');
    }

});


var upload = multer({ dest: 'upfile/image/' });
router.post('/', upload.single('thumbnail'), function (req, res) {
    //DBに入れ込む処理を呼び出す
    if(req.session.user){
        //var EVENTS = [];
        var eventid = randomByte.randomByte();//変更必要あり
        var eventname = req.body.eventname;
        var overview = req.body.overview;
        var password = req.body.password;
        var address = req.session.user.address;
        var displayname = req.session.user.displayName;
        var field = req.body.field;
        var venue = req.body.venue;
        var date = req.body.dates;
        var datesstart = req.body.datesstart;
        var datesfinish = req.body.datesfinish;
        var createstart = req.body.createstart;
        var createfinish = req.body.createfinish;
        var votestart = req.body.votestart;
        var votefinish = req.body.votefinish;
        var imagepath="";
        if(req.file){
          var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
          var imageExtension =rename.rename(extension);　//拡張子
          imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
          require('fs').rename(req.file.path, 'upfile/image/' + req.file.filename + imageExtension); //ここでファイル名を変更
        }else{
          imagepath="public/images/noimage.png"  //NoImageのPathをここに格納
        }

        const EVENTS = {
            'Eventid':eventid,
            'Eventname':eventname,
            'Overview':overview,
            'Password':password,
            'Address':address,
            'displayName':displayname,
            'Fieldid':field,
            'Venue':venue,
            'Date':date,
            'Holdperiod':{
                'Holdstart':datesstart,
                'Holdfinish':datesfinish
            },
            'Createperiod':{
                'Createstart':createstart,
                'Createfinish':createfinish
            },
            'Voteperiod':{
                'Votestart':votestart,
                'Votefinish':votefinish
            },
            'Image':imagepath
        };


        insertEvent.insertEvent(EVENTS);
        //twitter投稿（空白を入れると改行
        execSync('node ./app/js/event/twitterWrite.js イベントが作成されました リンクはこちら↓ http://localhost/eventtop?eventid='+eventid);
        var msg = "イベントを作成しました。";   //作成時メッセージ
        res.render('confirmation.ejs' , {msg:msg, url:''});
    }else{
        res.redirect('/');
    }

});
module.exports = router;
