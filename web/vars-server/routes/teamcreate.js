var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent=require("../app/js/event/getEvent");
var insertTeam =  require("../app/js/team/insertTeam");
var getTeam = require('../app/js/team/getTeam');
var randomByte = require("../app/js/db/randomByte");
var multer  = require('multer');
var rename = require('../app/js/image/rename');
var moment = require('../app/js/moment/moment');
var getField = require("../app/js/field/getField");
var getVote = require('../app/js/votes/getVote');
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid){
        var eventid=req.query.eventid;
        getVote.getVotejson({Eventid:eventid}).then(function (vote){
            getEvent.getEvent(eventid).then(function (docs) {
                var vote_flg = 0;
                if (vote.length === 0){         //投票項目があるか判別
                    vote_flg =1;
                }
                var today = moment.todate();
                var create_flag = moment.comparison(today,docs[0].Createperiod.Createstart,docs[0].Createperiod.Createfinish);
                if(create_flag){
                    res.render('teamcreate.ejs',{
                        displayName: req.session.user.displayName,
                        address: req.session.user.address,
                        eventid:eventid,
                        vote:vote,
                        vote_flg:vote_flg
                    });
                }else{
                    res.render('errorconfirmation.ejs', {msg:'チーム登録期間外です。',url:'/eventtop?eventid='+eventid});
                }
              })

            }).catch(function (msg) {
                res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
            })
        }else{
            res.redirect('/eventlist');
        }
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
          var workname=req.body.workname;
          var overview=req.body.overview;
          var displayname=req.session.user.displayName;
          var address=req.session.user.address;
          var imagepath="";
          var works = "";
          var department =req.body.department;// req.body.department;
          var order;
          var teamdata="";

          getTeam.getTeamjson({"Eventid":eventid,"Address":address}).then(function(teamdata){
            if(!(teamdata.length===0 || req.session.user.admin === true)){
              res.render('confirmation.ejs',{msg:'既にこのイベントでチームを作成しています。',url:'/eventtop?eventid='+eventid});
            }else{
        //DBに入れ込む処理を呼び出す
            if(req.file){
              var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
              var imageExtension =rename.rename(extension);　//拡張子
              imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
              require('fs').rename(req.file.path, 'upfile/' + req.file.filename + imageExtension); //ここでファイル名を変更
            }else{
              imagepath="public/images/noimage.png"  //NoImageのPathをここに格納
            }
          //発表順はとりあえず連番で取得する
            getTeam.getTeam(eventid).then(function(docs){
                order = docs.length++;
                // 送る値をJSON形式で記述
                const TEAMS = {
                    'Teamname'    :teamname,
                    'Teamid'      :teamid,
                    'Eventid'     :eventid,
                    'Workname'  :workname,
                    'Overview'    :overview,
                    'displayName' :displayname,
                    'Address'     :address,
                    'Image'       :imagepath,
                    'Works'       :works,
                    'Department' :department,
                    'Order'         :order
                };

                insertTeam.insertTeam(TEAMS);   //チーム作成
                var msg = "チームを作成しました。";   //作成時メッセージ
                res.render('confirmation.ejs' , {msg:msg, url:'/eventtop?eventid='+eventid});
            });
          }
        });
      }else{
          res.redirect('/');
      }

  });

  module.exports = router;
