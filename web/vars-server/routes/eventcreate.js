var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var createEvent = require("../app/js/event/createEvent");
var randomByte = require("../app/js/db/randomByte");
var insertEvent = require("../app/js/event/insertEvent");
var multer  = require('multer');
var rename = require('../app/js/image/rename');
var moment = require('../app/js/moment/moment');
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        res.render('eventcreate.ejs',{
            user: req.session.user.displayName,
            adress:req.session.user.address
          });
    } else{
        res.redirect('/');
    }

});


var upload = multer({ dest: 'images/' });
router.post('/', upload.single('thumbnail'), function (req, res) {
    //DBに入れ込む処理を呼び出す
    if(req.session.user){
        //var EVENTS = [];
        var eventid = randomByte.randomByte();//変更必要あり
        var eventname = req.body.eventname;
        var overview = req.body.overview;
        var address = req.session.user.address;
        var displayname = req.session.user.displayName;
        var course = req.body.course;
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
          require('fs').rename(req.file.path, 'images/' + req.file.filename + imageExtension); //ここでファイル名を変更
        }else{
          imagepath=""  //NoImageのPathをここに格納
        }

        const EVENTS = {
            'Eventid':eventid,
            'Eventname':eventname,
            'Overview':overview,
            'Address':address,
            'displayName':displayname,
            'Course':course,
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
        console.log(course);
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
