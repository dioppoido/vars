var express = require('express');
var router = express.Router();
var validator = require('validator');
var getTeam = require('../app/js/team/getTeam');
var getEvent = require('../app/js/event/getEvent');
var getAggregate = require('../app/js/aggregate/getAggregate');
var randomByte = require("../app/js/db/randomByte");
var getVote = require('../app/js/votes/getVote');
var insertVote = require('../app/js/votes/insertVote');
var todate = require("../app/js/moment/moment.js");
var async = require('async');

const PasswordCheck = function (req, res, next) {
    if (req.session.user) {
        if (req.query.eventid) {
            getEvent.getEvent(req.query.eventid).then(function (eventdata) {
                if (!(eventdata[0].Password) || (req.session.user.success === req.query.eventid)) {
                    next();
                } else {
                    req.session.user.success = "";
                    req.session.user.header = req.headers.referer;
                    console.log(req.headers);
                    req.session.user.get = 'vote' + req.url;
                    req.session.user.eventid = req.query.eventid;
                    res.render('password.ejs', {msg: ''});
                }
            });
        } else {
            res.redirect('/eventlist');
        }
    } else {
        res.redirect('/');
    }
};

router.get('/', PasswordCheck, function (req, res) {
    //ログインチェック
    if (req.session.user) {
        //イベントIDがGETに入っているかのチェック
        if (req.query.eventid) {
            var eventid = req.query.eventid;
            var msg = "";
            //イベントテーブルからデータ取り出し
            getEvent.getEvent(eventid).then(function (eventdata) {
                //投票期日に入っているかのチェック処理
                var today = todate.todate();
                var votestart = eventdata[0].Voteperiod.Votestart;
                var votefinish = eventdata[0].Voteperiod.Votefinish;
                var vote_flag = todate.comparison(today, votestart, votefinish);
                //入っている場合
                if (vote_flag === true) {
                    //既に投票しているかのチェック
                    var Aggregate_JSON = {
                        Eventid: eventid,
                        Address: req.session.user.address
                    }
                    getAggregate.getAggregate(Aggregate_JSON).then(function (aggregatedata) {
                        //していない場合（正規ルート）
                        if (aggregatedata.length === 0) {
                            //投票部門データの取り出し
                            getVote.getVote(eventid).then(function (votedata) {
                                //イベント内の全チームを取り出す
                                getTeam.getTeam(eventid).then(function (allteamdata) {
                                    var teamdata = [];
                                    //投票部門に入っているチームの取り出し（async）
                                    async.eachSeries(votedata, function (vote, next) {
                                        getTeam.getTeamjson({
                                            Department: vote.Voteid,
                                            Eventid: eventid
                                        }).then(function (team) {
                                            if (team.length > 0) {
                                                teamdata.push(team);
                                            }
                                            next();
                                        }).catch(function (msg) {
                                            res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                                        })
                                        //ループ終了した後
                                    }, function (err) {
                                        res.render('vote.ejs', {
                                            eventdata: eventid,
                                            allteamdata:allteamdata,
                                            teamdata: teamdata,
                                            votedata: votedata,
                                            msg: ""
                                        });
                                    });
                                    //全チーム取り出しでDBエラー発生時
                                }).catch(function (msg) {
                                    res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                                });
                                //投票部門がない場合or投票部門取り出し時にDBエラーが発生した場合
                            }).catch(function (msg) {
                                res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                            });
                            //投票済みだった場合
                        } else {
                            msg = "既に投票済みです。";
                            res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                        }
                        //投票データを取り出した時にDBエラーが発生した場合
                    }).catch(function (msg) {
                        res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                    });
                    //投票期間外だった場合
                } else if (vote_flag === false) {
                    res.render('errorconfirmation.ejs', {msg:"投票期間外です。",url:'/eventtop?eventid='+eventid});
                }
                //イベントが見つからなかった場合
            }).catch(function () {
                res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません', url: '/eventlist'});
            });
            //GETにイベントIDが見つからなかった場合
        } else {
            res.redirect('/eventlist');
        }
        //ログインしていなかった場合
    } else {
        res.redirect('/');
    }

});


router.post('/', function (req, res) {
    if (req.session.user) {
        var AGGREGATES = [];
        var voteid = req.body.voteid;
        var teamid = req.body.teamid;
        var teamidlength = teamid.length;
        for (i = 0; i < teamidlength; i++) {
            const WORK_JSON = {
                'aggregateid': null,
                'voteid': null,
                'eventid': null,
                'address': null,
                'teamid': null
            };
            WORK_JSON.aggregateid = randomByte.randomByte();
            WORK_JSON.voteid = req.body.voteid[i];
            WORK_JSON.eventid = req.body.eventid[i];
            WORK_JSON.address = req.session.user.address;
            WORK_JSON.teamid = req.body.teamid[i];

            AGGREGATES.push(WORK_JSON);

            console.log(AGGREGATES[i]);


        }
        ;
        insertVote.insertVote(AGGREGATES);
        res.redirect('/voteresult?eventid=' + req.body.eventid[0]);
    } else {
        res.redirect('/');
    }


});

module.exports = router;
