var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent = require("../app/js/event/getEvent");//イベント抽出
var getTeam = require("../app/js/team/getTeam");//チーム抽出
var getVote = require("../app/js/votes/getVote");//投票抽出
var getAggregate = require("../app/js/aggregate/getAggregate");//集計抽出
var async = require('async');

const getCount=function(voteid,teamdata,eventid){
    async.eachSeries(teamdata,function(data,next) {
        console.log("asyncチームデータループ開始")
        var filedJson = {
            Teamid: data.Teamid,
            Voteid: voteid,
            Eventid: eventid
        };
        console.log(filedJson);
        getAggregate.getAggregate(filedJson).then(function (docs4) {
            var vote_Json = {
                votecnt: docs4.length,
                Teamname: data.Teamname
            };
            console.log("vote_json" + vote_Json);
            votedata.push(vote_Json);
            next();
        }).catch(function (err) {
            console.log(err);
        });
    },function complete(err){
        console.log("votedata:" + votedata);
        return votedata;

    });
}

//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        getEvent.getEvent("1").then(function (docs){
            getTeam.getTeam(docs[0].Eventid).then(function (docs2){
                getVote.getVote(docs[0].Eventid).then(function (docs3){

                    //集計結果
                    var full_aggregate =  new Array();

                    async.eachSeries(docs2,function(field,next){
                        //部門ごとのJSON
                        var filedJson = {
                            Teamid : field.Teamid,
                            Eventid : docs[0].Eventid
                        };
                        getAggregate.getAggregate(filedJson).then(function(docs4){
                            //チームごとの得票数
                            var voteJson = {
                                votecnt: docs4.length,
                                Teamname: field.Teamname
                            };
                            full_aggregate.push(voteJson);
                            next();
                        }).catch(function(err){
                            console.log("総合分野取得エラー"+err);
                            res.render('aggregate.ejs',{error: "総合分野取得エラー", event: "", team: "", vote: ""});
                        });
                    }, function complete(err) {
                        if(!err){
                            //分野毎の得票数
                            var n=0;
                            var i=0;
                            var vote_aggregate =  new Array();
                            var votedata=[];
                            //console.log("二重ループ開始");
                            async.eachSeries(docs3,function(vote,callback1){
                                    //console.log("分野処理"+ vote);
                                    votedata=[];
                                async.eachSeries(docs2,function(team,callback2){
                                    var filedJson = {
                                        Teamid: team.Teamid,
                                        Voteid: vote.Voteid,
                                        Eventid: docs[0].Eventid
                                    };
                                    setTimeout(function () {
                                        getAggregate.getAggregate(filedJson).then(function (docs4) {
                                            //console.log("投票データ取り出し:"+docs4.length);
                                            votedata.push({
                                                votecnt: docs4.length,
                                                Teamname: team.Teamname
                                            });
                                            callback2();
                                        })
                                    },100);
                                },function(err){
                                    if(err){
                                        //console.log("二重ループのテスト中のエラーらしい")
                                        callback1();
                                    }else{
                                        //console.log("二重ループのテストで一応成功しているらしい");
                                        console.log(vote.Votename);
                                        for(var cnt in votedata) {
                                            console.log("votedata仕上げ:" + votedata[cnt].votecnt+":"+votedata[cnt].Teamname);
                                        }
                                        vote_aggregate[vote_aggregate.length]=new Array();
                                        console.log(vote_aggregate.length);
                                        vote_aggregate[vote_aggregate.length-1]=votedata;
                                        callback1();
                                    }
                                });
                            },function(err){
                                console.log("二重ループ成功");
                                console.log(vote_aggregate);
                                for(var cnt1 in vote_aggregate){
                                    console.log(docs3[cnt1].Votename);
                                    for(cnt2 in vote_aggregate[cnt1]){
                                        console.log("votedata仕上げ:" + vote_aggregate[cnt1][cnt2].votecnt+":"+vote_aggregate[cnt1][cnt2].Teamname);
                                    }
                                }
                                res.render('aggregate.ejs',{error: "", event: "", team: "", vote: ""});
                            })

                            }


                        });

                }).catch(function(){
                    res.render('aggregate.ejs',{error: "投票エラー", event: "", team: "", vote: ""});
                });
            }).catch(function(){
                res.render('aggregate.ejs',{error: "チームエラー", event: "", team: "", vote: ""});
            });
        }).catch(function(){
            res.render('aggregate.ejs',{error: "イベントエラー", event:"", team: "" , vote: ""});
        });
    } else{
        res.redirect('/');
    }

});

module.exports = router;