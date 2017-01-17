var express = require('express');
var router = express.Router();
var getTeam = require("../app/js/team/getTeam");
var getVote = require('../app/js/votes/getVote');
var nl2br = require("../app/js/nl2br/nl2br.js");
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
                    var overview=nl2br.textarea(teamdata[0].Overview);
                    var votename=[];
                    async.eachSeries(teamdata[0].Department,function (department,next) {
                        getVote.getVotejson({Voteid:department}).then(function (votedata) {
                            if(votedata.length>0) {
                                votename.push(votedata[0].Votename);
                            }
                            next();
                        }).catch(function (msg) {
                            res.render('errorconfirmation.ejs', {msg: msg, url: '/eventtop?eventid=' + eventid});
                        })
                    },function (err) {
                        console.log(votename);
                        res.render('teamtop.ejs',{teamdata: teamdata, overview:overview, votename:votename});
                    })
                }
            });
        }else{
            res.redirect('/eventlist');
        }
    } else{
        res.redirect('/');
    }

});


module.exports = router;
