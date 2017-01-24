var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent = require("../app/js/event/getEvent");//イベント抽出
var getTeam = require("../app/js/team/getTeam");//チーム抽出
var getVote = require("../app/js/votes/getVote");//投票抽出
var getAggregate = require("../app/js/aggregate/getAggregate");//集計抽出
var async = require('async');


//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid) {
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                getTeam.getTeam(docs[0].Eventid).then(function (docs2) {
                    getVote.getVote(docs[0].Eventid).then(function (docs3) {

                        //集計結果
                        var full_aggregate = [];

                        async.eachSeries(docs2, function (field, next) {
                            //部門ごとのJSON
                            var filedJson = {
                                Teamid: field.Teamid,
                                Eventid: docs[0].Eventid
                            };
                            getAggregate.getAggregate(filedJson).then(function (docs4) {
                                //チームごとの得票数
                                var voteJson = {
                                    votecnt: docs4.length,
                                    Teamname: field.Teamname
                                };
                                console.log("voteJson:" + voteJson.Teamname);
                                full_aggregate.push(voteJson);
                                next();
                            }).catch(function (err) {
                                console.log("総合分野取得エラー" + err);
                                res.render('aggregate.ejs', {error: "総合分野取得エラー", event: "", team: "", vote: ""});
                            });
                        }, function complete(err) {
                            if (!err) {
                                //分野毎の得票数
                                full_aggregate.sort(function (a, b) {
                                    if (a.votecnt > b.votecnt)return -1;
                                    if (a.votecnt < b.votecnt)return 1;
                                    return 0;
                                });
                                console.log("総合" + full_aggregate[0].Teamname);
                                var n = 0;
                                var i = 0;
                                var vote_aggregate = new Array();
                                var votedata = [];
                                //console.log("二重ループ開始");
                                async.eachSeries(docs3, function (vote, callback1) {
                                    //console.log("分野処理"+ vote);
                                    votedata = [];
                                    async.eachSeries(docs2, function (team, callback2) {
                                        //分野に入っているかの判定
                                        if((team.Department).indexOf(vote.Voteid)>=0) {
                                            var filedJson = {
                                                Teamid: team.Teamid,
                                                Voteid: vote.Voteid,
                                                Eventid: docs[0].Eventid
                                            };
                                            getAggregate.getAggregate(filedJson).then(function (docs4) {
                                                //console.log("投票データ取り出し:"+docs4.length);
                                                votedata.push({
                                                    votecnt: docs4.length,
                                                    Teamname: team.Teamname
                                                });
                                                callback2();
                                            })
                                        }else{
                                            callback2();
                                        }
                                    }, function (err) {
                                        if (err) {
                                            //console.log("二重ループのテスト中のエラーらしい")
                                            callback1();
                                        } else {
                                            //console.log("二重ループのテストで一応成功しているらしい");
                                            votedata.sort(function (a, b) {
                                                if (a.votecnt > b.votecnt)return -1;
                                                if (a.votecnt < b.votecnt)return 1;
                                                return 0;
                                            });
                                            console.log(vote.Votename);
                                            for (var cnt in votedata) {
                                                console.log("votedata仕上げ:" + votedata[cnt].votecnt + ":" + votedata[cnt].Teamname);
                                            }
                                            vote_aggregate[vote_aggregate.length] = new Array();
                                            console.log(vote_aggregate.length);
                                            vote_aggregate[vote_aggregate.length - 1] = votedata;
                                            callback1();
                                        }
                                    });
                                }, function (err) {
                                    if(docs[0].Release_flag === false&&(!req.session.user.admin)){         //管理者によって集計画面を閲覧OKの処理をしないと表示しないように
                                        var msg = "現在集計中です、もうしばらくお待ちください。";
                                        res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                                    }else {
                                        var ejs = "voteresult.ejs";
                                        //管理者ユーザーの場合
                                        if (req.session.user.admin) {
                                            ejs = 'adminvoteresult.ejs';
                                        }
                                        res.render(ejs, {
                                            error: "",
                                            full_aggregate: full_aggregate,
                                            vote_aggregate: vote_aggregate,
                                            votedata: docs3
                                        });
                                    }
                                })

                            }


                        });

                    }).catch(function (msg) {
                        res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                    });
                }).catch(function (msg) {
                    res.render('errorconfirmation.ejs', {msg:msg,url:'/eventtop?eventid='+eventid});
                });
            }).catch(function (msg) {
                res.render('errorconfirmation.ejs', {msg:msg,url:'/eventlist'});
            });
        }else{
            res.redirect('/eventlist');
        }
    } else{
        res.redirect('/');
    }

});

module.exports = router;
