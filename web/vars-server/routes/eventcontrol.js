var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");
var deleteEvent = require("../app/js/event/deleteEvent");
var updateEvent = require("../app/js/event/updateEvent");
var deleteTeam = require("../app/js/team/deleteTeam");
var getVote = require("../app/js/votes/getVote");
var insertVote = require("../app/js/votes/insertVote");
var deleteVote = require("../app/js/votes/deleteVote");
var getTeam = require("../app/js/team/getTeam");
var randomByte = require("../app/js/db/randomByte");
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

router.post('/eventsetting', function(req, res) {
    if(req.session.user){
      var eventdata={
        Eventname:req.body.eventname,
        Overview:req.body.overview,
        Password:req.body.password,
        Address:req.body.address,
        displayName:req.body.displayname,
        Fieldid:req.body.fielid,
        Venue:req.body.venue,
        Holdperiod:{
          Holdstart:req.body.holdstart,
          Holdfinish:req.body.holdfinish
        },
        Createperiod:{
          Createstart:req.body.createstart,
          Createfinish:req.body.createfinish
        },
        Voteperiod: {
            Votestart:req.body.votestart,
            Votefinish:req.body.votefinish
        },

      }
      updateEvent.updateEvent({Eventid:req.body.eventid}, {$set:{eventdata}})

    } else {
        res.redirect('/');
    }
});

router.get('/votesetting', function(req, res) {
    if(req.session.user){
        if(req.query.eventid) {
            var eventid = req.query.eventid;
            getEvent.getEvent(eventid).then(function (eventdata) {
                getVote.getVotejson({Eventid: eventid}).then(function (vote) {
                    res.render('votesetting.ejs', {vote: vote, eventdata: eventdata});
                }).catch(function () {

                    res.render('errorconfirmation.ejs', {msg: '投票データがありません。', url: '/eventcontrol?eventid=' + eventid});

                });
            }).catch(function () {
                res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません。', url: '/eventlist'});
            });
        }else{
            res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません。', url: '/eventlist'});
        }
    } else{
        res.redirect('/');
    }
});

router.post('/votesetting', function(req, res) {

    var field = req.body.fieldname;

    console.log(field);

    res.render('votesetting.ejs');
});

router.post('/votesetting/append', function(req, res) {
    if(req.session.user){
        Votename=req.body.fieldname;
        Eventid=req.body.eventid;
        if(typeof(Votename)==="object") {
            for (var i = 0; i < Votename.length; i++) {
                var Votedata={
                    Votename:Votename[i],
                    Voteid:randomByte.randomByte(),
                    Eventid:Eventid
                }; 
                insertVote.insertVote(Votedata);
                res.render('confirmation.ejs',{msg:'部門データを登録しました。',url:'/eventcontrol/votesetting?eventid='+Eventid});
            }
        } else {
            var Votedata = {
                Votename: Votename,
                Voteid: randomByte.randomByte(),
                Eventid: Eventid
            };
            insertVote.insertVote(Votedata);
            res.render('confirmation.ejs', {msg: '部門データを登録しました。', url: '/eventcontrol/votesetting?eventid=' + Eventid});
        }
    }else{
        res.redirect('/');
    }
});

router.post('/votesetting/delete', function(req, res) {
    if(req.session.user){
        voteid=req.body.voteid;
        eventid=req.body.eventid;
        if(typeof(voteid)==="object") {
            for (var i = 0; i < voteid.length; i++) {
                deleteVote.deleteVote({Voteid:voteid[i]});
                res.render('confirmation.ejs',{msg:'部門データを削除しました。',url:'/eventcontrol/votesetting?eventid='+eventid});
            }
        } else {
            deleteVote.deleteVote({Voteid:voteid});
            res.render('confirmation.ejs', {msg: '部門データを削除しました。', url: '/eventcontrol/votesetting?eventid=' + eventid});
        }
    }else{
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
                            if(team.length>0) {
                                teamdata.push(team[0]);
                            }
                            callback1();
                        }).catch(function (msg) {
                            //チーム取り出し時のDBエラーを記述
                            console.log(msg);
                            res.render('errorconfirmation.ejs', {msg: msg, url: '/eventcontrol?eventid='+eventid});
                        })
                    }, function (err) {
                        //処理成功時を記述
                        res.json(teamdata);
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
          if(req.query.eventid) {
              var eventid = req.query.eventid;
              getEvent.getEvent(eventid).then(function (eventdata) {
                  var teamdata = [];
                  async.eachSeries(eventdata[0].Order, function (order, callback) {
                      getTeam.getTeamjson({Teamid: order}).then(function (team) {
                          if (team.length > 0) {
                              teamdata.push(team[0]);
                          }
                          callback();
                      }).catch(function (msg) {
                          res.render('errorconfirmation.ejs', {msg: msg, url: '/announcesetting?eventid=' + eventid});
                      })
                  }, function (err) {
                      res.render('announcesetting.ejs', {eventdata: teamdata});
                  });
              }).catch(function () {
                  res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません', url: '/eventlist'});
              });
          }else{
              res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません', url: '/eventlist'});
          }
      } else {
          res.redirect('/');
      }
});

router.post('/announcesetting', function(req, res) {

    var announce = req.body.announce;

    console.log(announce);

    res.render('announcesetting.ejs');
});


module.exports = router;
