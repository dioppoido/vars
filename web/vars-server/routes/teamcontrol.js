var express = require('express');
var router = express.Router();
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

router.post('/', function(req, res) {
      if(req.session.user){
          //チーム削除のテスト
          console.log(req.body.Teamid);
          const TEAMS={'Teamid':req.body.Teamid};
          deleteTeam.deleteTeam(TEAMS);
          res.render('confirmation.ejs',{msg:'チームを削除しました',url:'/eventlist'});

      }else{
        res.redirect('/eventlist');
      }
});

module.exports = router;
