var express = require('express');
var router = express.Router();
var getTeam = require("../app/js/team/getTeam");
var nl2br = require("../app/js/nl2br/nl2br.js");
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
                    res.render('teamtop.ejs',{teamdata: teamdata, overview:overview});
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
