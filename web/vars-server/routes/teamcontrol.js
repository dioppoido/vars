var express = require('express');
var router = express.Router();
var multer  = require('multer');
var rename = require('../app/js/image/rename');
var moment = require('../app/js/moment/moment');
var getEvent = require("../app/js/event/getEvent");
var deleteEvent = require("../app/js/event/deleteEvent");
var updateEvent = require("../app/js/event/updateEvent");
var updateVote = require("../app/js/votes/updateVote");
var deleteTeam = require("../app/js/team/deleteTeam");
var getVote = require("../app/js/votes/getVote");
var insertVote = require("../app/js/votes/insertVote");
var deleteVote = require("../app/js/votes/deleteVote");
var getTeam = require("../app/js/team/getTeam");
var getField = require("../app/js/field/getField");
var randomByte = require("../app/js/db/randomByte");
var updateTeam = require("../app/js/team/updateTeam");
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.user){
        if(req.query.teamid){
            var teamid=req.query.teamid;
            var teamJson ={
                Teamid : teamid
            };
            getTeam.getTeamjson(teamJson).then(function (teamdata) {
                if( teamdata.length == 0){
                    res.render('confirmation.ejs',{msg:'チームIDが存在しません',url:'/eventlist'});
                }else {
                    res.render('teamcontrol.ejs',{teamdata: teamdata});
                }
            });
        }else{
            res.redirect('/eventlist');
        }
    } else{
        res.redirect('/');
    }

});

var upload = multer({ dest: 'upfile/image/' });
router.post('/teamchange',upload.single('thumbnail'), function(req, res) {
      if(req.session.user){
          //チーム情報の変更
          var teamid=req.body.teamid;
          var teamname=req.body.teamname;
          var workname=req.body.workname;
          var overview=req.body.overview;
          var displayname=req.body.displayname;
          var address=req.body.address;
          var imagepath=req.body.imagepath;
          //サムネをDBに入れ込む処理を呼び出す
          if(req.file){
            var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
            var imageExtension =rename.rename(extension);　//拡張子
            imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
            require('fs').rename(req.file.path, 'upfile/image/' + req.file.filename + imageExtension); //ここでファイル名を変更
          }else{
            // imagepath=""  //NoImageのPathをここに格納
          }

          // console.log(teamname,workname,overview,displayname,address);
          const FIND = {'Teamid':teamid};
          const TEAMS={'Teamname':teamname,
                        'Workname':workname,
                        'Overview':overview,
                        'displayName':displayname,
                        'Address':address,
                        'Image':imagepath
                      };
          updateTeam.updateTeam(FIND,TEAMS);

          res.render('confirmation.ejs',{msg:'チーム情報を変更しました',url:'/teamcontrol?teamid='+teamid});

      }else{
        res.redirect('/eventlist');
      }
});
var uploadpdf = multer({ dest: 'upfile/pdf/' });
router.post('/teampdf', uploadpdf.single('teampdf'),function(req, res) {
      if(req.session.user){
          //PDF追加
          var pdf=req.body.work;
          var teamid=req.body.teamid;

          //サムネをDBに入れ込む処理を呼び出す
          if(req.file){
            var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
            var imageExtension =rename.rename(extension);　//拡張子
            pdf=req.file.path+rename.rename(extension); //データベースに格納用のpath
            require('fs').rename(req.file.path, 'upfile/pdf/' + req.file.filename + imageExtension); //ここでファイル名を変更
          }else{
            // imagepath=""  //NoImageのPathをここに格納
          }

          const FIND = {'Teamid':teamid};
          const TEAMS={'Work':pdf};
          updateTeam.updateTeam(FIND,TEAMS);

          res.render('confirmation.ejs',{msg:'PDFを追加しました',url:'/teamcontrol?teamid='+teamid});

      }else{
        res.redirect('/eventlist');
      }
    });


router.post('/teamdelete', function(req, res) {
    if(req.session.user){
      //チーム削除のテスト
      var teamid = req.body.teamid;
      getTeam.getTeamjson({'Teamid':teamid}).then(function(docs){


      const TEAMS={'Teamid':teamid};
      deleteTeam.deleteTeam(TEAMS);
      res.render('confirmation.ejs',{msg:'チームを削除しました',url:'/eventtop?eventid='+docs[0].Eventid});
    });
        }else{
          res.redirect('/eventlist');
        }
      });


module.exports = router;
