var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");
var deleteEvent = require("../app/js/event/deleteEvent");
var deleteTeam = require("../app/js/team/deleteTeam");
var getVote = require("../app/js/votes/getVote");
var getTeam = require("../app/js/team/getTeam");
var async = require('async');

router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid){
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                res.render('eventcontrol.ejs',{eventdata: docs,id:eventid});
            }).catch(function(){
                res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});
            });
        }else{
            res.redirect('/eventlist');
        }
    } else{
        res.redirect('/');
    }

});
router.post('/', function(req, res) {
      if(req.session.user){
        var eventdelete=req.body.eventdelete;
        var eventid=req.body.eventid;
        //イベント削除のテスト
        const EVENTS={'Eventid':eventid};
        deleteEvent.deleteEvent(EVENTS);
        //チーム削除のテスト
        const TEAMS={'Teamid':1,
                      'Eventid':eventid};
        deleteTeam.deleteTeam(TEAMS);
        res.render('confirmation.ejs',{msg:'イベントを削除しました',url:'/eventlist'});
      }else{
        res.redirect('/eventlist');
      }
});


router.get('/eventsetting', function(req, res) {
    if(req.session.user){
          var eventid=req.query.eventid;
          getEvent.getEvent(eventid).then(function (docs){
              console.log(docs);
              res.render('eventsetting.ejs',{eventdata:docs});

          }).catch(function(){

            res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

        });
    } else {
        res.redirect('/eventlist');
    }
});

router.get('/votesetting', function(req, res) {
    if(req.session.user){
      var eventid=req.query.eventid;
      getVote.getVotejson({Eventid:eventid}).then(function (vote){
        res.render('votesetting.ejs',{vote:vote});
      }).catch(function(){

        res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

    });
    } else{
        res.redirect('/');
    }
});

/**
 * チームの部門設定ページ
 * /eventcontrol/fieldsetting
 * 作成者：土居
 */
router.get('/fieldsetting', function (req, res) {
    //ログインチェック
    if (req.session.user) {
        //イベントIDのチェック
        if (req.query.eventid) {
            var eventid = req.query.eventid;
            //イベントデータ取り出し
            getEvent.getEvent(eventid).then(function (eventdata) {
                //イベントIDで投票部門データを取り出し
                getVote.getVote(eventid).then(function (votedata) {
                    var teamdata = [];
                    //発表順番データでループする（発表順番データの配列内のチームIDで検索をかける）
                    async.eachSeries(eventdata[0].Order, function (order, callback1) {
                        //イベントデータ.Orderから取得されるチームIDでチームデータを取得
                        getTeam.getTeamjson({Teamid:order}).then(function (team) {
                            //チームデータを順番通りに格納する
                            teamdata.push(team[0]);
                            callback1();
                        }).catch(function (msg) {
                            //チーム取り出し時のDBエラーを記述
                            console.log(msg);
                            res.render('errorconfirmation.ejs', {msg: msg, url: '/eventcontrol?eventid='+eventid});
                        })
                    }, function (err) {
                        //処理成功時を記述
                        res.json(votedata);
                    })
                }).catch(function (msg) {
                    //投票部門データが検索できなかった時にエラーページを表示
                    res.render('errorconfirmation.ejs', {msg: "投票データが存在しません。", url: '/eventcontrol?eventid='+eventid});
                });
            }).catch(function (msg) {
                //イベントデータが検索できなかった時にエラーページを表示
                res.render('errorconfirmation.ejs', {msg: "イベントが存在しません。", url: '/eventlist'});
            });
        } else {
            res.render('errorconfirmation.ejs', {msg: "イベントが存在しません。", url: '/eventlist'});
        }
    } else {
        res.redirect('/');
    }
});

router.get('/announcesetting', function(req, res) {
      if(req.session.user){
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                getTeam.getTeam(eventid).then(function (docs){
                    console.log(docs);
                    res.render('announcesetting.ejs',{eventdata:docs});
                }).catch(function(){
                        res.render('confirmation.ejs',{msg:'チームが存在しません',url:'/eventlist'});
                });
            }).catch(function(){
                res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});
            });
      } else {
          res.redirect('/eventlist');
      }
});



module.exports = router;
