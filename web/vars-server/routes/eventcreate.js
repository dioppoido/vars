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
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        getField.getField().then(function (docs) {    //分野取得
            res.render('eventcreate.ejs',{
                user: req.session.user.displayName,
                adress:req.session.user.address,
                field: docs
            });
        });

    } else{
        res.redirect('/');
    }

});


var upload = multer({ dest: 'upfile/' });
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
        var createstart = req.body.createstart;
        var createfinish = req.body.createfinish;
        var votestart = req.body.votestart;
        var votefinish = req.body.votefinish;
        var imagepath="";
        if(req.file){
          var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
          var imageExtension =rename.rename(extension);　//拡張子
          imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
          require('fs').rename(req.file.path, 'upfile/' + req.file.filename + imageExtension); //ここでファイル名を変更
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

        console.log(req.file);
        console.log(eventid);
        console.log(eventname);
        console.log(overview);
        console.log(address);
        console.log(displayname);
        console.log(field);
        console.log(venue);
        console.log(createstart);
        console.log(createfinish);
        console.log(votestart);
        console.log(votefinish);





        insertEvent.insertEvent(EVENTS);
        res.redirect('/');  //行き先不明
    }else{
        res.redirect('/');
    }

});

module.exports = router;
