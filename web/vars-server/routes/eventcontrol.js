var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");
var deleteEvent = require("../app/js/event/deleteEvent");
var updateEvent = require("../app/js/event/updateEvent");
var updateVote = require("../app/js/votes/updateVote");
var updateTeam = require("../app/js/team/updateTeam");
var deleteTeam = require("../app/js/team/deleteTeam");
var getVote = require("../app/js/votes/getVote");
var insertVote = require("../app/js/votes/insertVote");
var deleteVote = require("../app/js/votes/deleteVote");
var getTeam = require("../app/js/team/getTeam");
var getField = require("../app/js/field/getField");
var randomByte = require("../app/js/db/randomByte");
var updateEvent = require("../app/js/event/updateEvent");
var rename = require('../app/js/image/rename');
var async = require('async');
var multer  = require('multer');
var fs = require('fs');
var moment = require('../app/js/moment/moment');

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
          getEvent.getEvent(eventid).then(function (docs){      //イベントが存在しているか確認
              console.log("eventdata:"+docs);
              var Holdfinish=moment.parsedate(docs[0].Holdperiod.Holdfinish,"YYYY/M/D HH:mm");
              var Holdstart=moment.parsedate(docs[0].Holdperiod.Holdstart,"YYYY/M/D HH:mm");
              var Createstart=moment.parsedate(docs[0].Createperiod.Createstart,"YYYY/M/D HH:mm");
              var Createfinish=moment.parsedate(docs[0].Createperiod.Createfinish,"YYYY/M/D HH:mm");
              var Votestart=moment.parsedate(docs[0].Voteperiod.Votestart,"YYYY/M/D HH:mm");
              var Votefinish=moment.parsedate(docs[0].Voteperiod.Votefinish,"YYYY/M/D HH:mm");
              getField.getField().then(function (field) {    //分野取得
                  console.log("分野:" + field);
                  res.render('eventsetting.ejs',{
                      eventdata:docs,
                      field : field,
                      user: req.session.user.displayName,
                      adress: req.session.user.address,
                      holdfinish:Holdfinish,
                      holdstart:Holdstart,
                      createstart:Createstart,
                      createfinish:Createfinish,
                      votestart:Votestart,
                      votefinish:Votefinish
                  });
              });
          }).catch(function(){

            res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

        });
    } else {
        res.redirect('/eventlist');
    }
});
var upload = multer({ dest: 'upfile/image/' });
router.post('/eventsetting',  upload.single('thumbnail'), function (req, res) {
    if(req.session.user){
      var eventid =req.body.eventid;
      var imagepath=req.body.imagepath;
      if(req.file){
        if(imagepath != 'public/images/noimage.png'){
        fs.unlink(imagepath, function (err) {
        });
      }
        var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
        var imageExtension =rename.rename(extension);　//拡張子
        imagepath=req.file.path+rename.rename(extension); //データベースに格納用のpath
        require('fs').rename(req.file.path, 'upfile/image/' + req.file.filename + imageExtension); //ここでファイル名を変更
      }else{
        imagepath=req.body.imagepath;
      }



      var eventdata={
        Eventname:req.body.eventname,
        Overview:req.body.overview,
        Password:req.body.password,
        Address:req.body.address,
        displayName:req.body.displayname,
        Fieldid:req.body.field,
        Venue:req.body.venue,
        Holdperiod:{
          Holdstart:req.body.datesstart,
          Holdfinish:req.body.datesfinish
        },
        Createperiod:{
          Createstart:req.body.createstart,
          Createfinish:req.body.createfinish
        },
        Voteperiod: {
            Votestart:req.body.votestart,
            Votefinish:req.body.votefinish
        },
        Image:imagepath,
        Release_flag:req.body.release
      };
      console.log(eventdata.Fieldid);
      updateEvent.updateEvent({Eventid:req.body.eventid}, {$set:eventdata});
      res.render('confirmation.ejs',{msg: 'イベント情報を変更しました。', url:'/eventcontrol/eventsetting?eventid='+eventid});
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

router.post('/votesetting', function (req, res) {
    if (req.session.user) {
        var mode = req.query.mode;
        //追加処理（作成者：土居）
        if (mode === "append") {
            Votename = req.body.fieldname;
            Eventid = req.body.eventid;
            if (typeof(Votename) === "object") {
                for (var i = 0; i < Votename.length; i++) {
                    var Votedata = {
                        Votename: Votename[i],
                        Voteid: randomByte.randomByte(),
                        Eventid: Eventid
                    };
                    insertVote.insertVote(Votedata);
                }
                res.render('confirmation.ejs', {
                    msg: '部門データを登録しました。',
                    url: '/eventcontrol/votesetting?eventid=' + Eventid
                });
            } else {
                var Votedata = {
                    Votename: Votename,
                    Voteid: randomByte.randomByte(),
                    Eventid: Eventid
                };
                insertVote.insertVote(Votedata);
                res.render('confirmation.ejs', {
                    msg: '部門データを登録しました。',
                    url: '/eventcontrol/votesetting?eventid=' + Eventid
                });
            }
            //変更処理（作成者：川西）
        } else if (mode === "change") {
            var votename = req.body.fieldname;
            var voteid = req.body.voteid;
            var eventid = req.body.eventid;
            if (typeof(votename) === "object") {
                for (var i = 0; i < votename.length; i++) {
                    updateVote.updateVote({Voteid: voteid[i]}, {$set: {Votename: votename[i]}});
                    res.render('confirmation.ejs', {
                        msg: '投票部門名を変更しました。',
                        url: '/eventcontrol/votesetting?eventid=' + eventid
                    });
                }
            } else {
                updateVote.updateVote({Voteid: voteid[i]}, {$set: {Votename: votename[i]}});
                res.render('confirmation.ejs', {
                    msg: '投票部門名を変更しました。',
                    url: '/eventcontrol/votesetting?eventid=' + eventid
                });
            }
            //削除処理（作成者：土居）
        } else if (mode === "delete") {
            voteid = req.body.voteid;
            eventid = req.body.eventid;
            if (typeof(voteid) === "object") {
                for (var i = 0; i < voteid.length; i++) {
                    deleteVote.deleteVote({Voteid: voteid[i]});
                    res.render('confirmation.ejs', {
                        msg: '部門データを削除しました。',
                        url: '/eventcontrol/votesetting?eventid=' + eventid
                    });
                }
            } else {
                deleteVote.deleteVote({Voteid: voteid});
                res.render('confirmation.ejs', {
                    msg: '部門データを削除しました。',
                    url: '/eventcontrol/votesetting?eventid=' + eventid
                });
            }
        }
    } else {
        res.redirect('/')
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
                    getTeam.getTeam(eventid).then(function (allteam) {
                        var teamdata = [];
                        async.eachSeries(votedata,function (vote,callback1) {
                            var teams=[];
                            //発表順番データでループする（発表順番データの配列内のチームIDで検索をかける）
                            async.eachSeries(eventdata[0].Order, function (order, callback2) {
                                //イベントデータ.Orderから取得されるチームIDでチームデータを取得
                                getTeam.getTeamjson({Teamid:order,Department:vote.Voteid}).then(function (team) {
                                    //チームデータを順番通りに格納する
                                    if(team.length>0) {
                                        teams.push(team[0]);
                                    }
                                    callback2();
                                }).catch(function (msg) {
                                    //チーム取り出し時のDBエラーを記述
                                    console.log(msg);
                                    res.render('errorconfirmation.ejs', {msg: msg, url: '/eventcontrol?eventid='+eventid});
                                })
                            }, function (err) {
                                teamdata.push(teams);
                                callback1();
                            })
                        },function (err) {
                            res.render('fieldsetting.ejs',{teamdata:teamdata,votedata:votedata,allteam:allteam,eventid:eventdata[0].Eventid});
                        });
                    }).catch(function () {
                        res.render('errorconfirmation.ejs', {msg: "チームデータが存在しません。", url: '/eventcontrol?eventid='+eventid});
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

router.post('/fieldsetting', function (req, res) {
    if(req.session.user){
        var eventid=req.body.eventid;
        var teamid=req.body.teamid;
        var voteid=req.body.voteid;
        console.log("voteid:"+voteid);
        console.log("teamid:"+teamid)

        getTeam.getTeamjson({Teamid:teamid}).then(function (teamdata) {
            updateTeam.updateTeam({Teamid:teamid},{$set:{Department:voteid}});
            res.render('confirmation.ejs', {
                msg: 'チーム名：'+teamdata[0].Teamname+'の投票部門を設定しました。',
                url: '/eventcontrol/fieldsetting?eventid=' + eventid
            });
        }).catch(function (msg) {

        })
    }else{
        res.redirect('/');
    }
})

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
                          res.render('errorconfirmation.ejs', {msg: msg, url: '/eventcontrol/announcesetting?eventid=' + eventid});

                      })
                  }, function (err) {
                      if(teamdata.length>0) {
                          res.render('announcesetting.ejs', {teamdata: teamdata});
                      }else{
                          res.render('errorconfirmation.ejs', {msg: 'チームが存在しません。', url: '/eventcontrol?eventid='+eventid});
                      }
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
    announce=announce.split(',');
    var eventid =req.body.eventid;
    updateEvent.updateEvent({Eventid:eventid},{$set:{Order:announce}});

    res.render('confirmation.ejs',{msg: '表示順を変更しました。', url:'/eventcontrol/announcesetting?eventid='+eventid});
});

/* 作成者 長谷川  投票結果公開非公開の処理 */
router.get('/releasesetting', function(req, res) {
    if(req.session.user){
        if(req.query.eventid) {
            var eventid = req.query.eventid;
            getEvent.getEvent(eventid).then(function (eventdata) {
                res.render('releasesetting.ejs');
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


module.exports = router;
