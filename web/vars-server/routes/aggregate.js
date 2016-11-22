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
        getEvent.getEvent("1").then(function (docs){
            getTeam.getTeam(docs[0].Eventid).then(function (docs2){
                getVote.getVote(docs[0].Eventid).then(function (docs3){

                    //集計結果
                    var aggregate =  new Array();

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
                            aggregate.push(voteJson);
                            next();
                        }).catch(function(){
                            res.render('aggregate.ejs',{error: "総合分野取得エラー", event: "", team: "", vote: ""});
                        });
                    }, function complete(err) {
                        if(!err){
                            //分野毎の得票数
                            async.eachSeries(docs3,function(vote,next){
                                
                                next();
                            }, function complete(err) {
                                if(!err){
                                    res.render('aggregate.ejs',{error: "", event:docs, team:docs2, vote: docs3});
                                }
                            });
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