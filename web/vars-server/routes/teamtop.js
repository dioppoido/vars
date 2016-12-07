var express = require('express');
var router = express.Router();
var getTeam = require("../app/js/team/getTeam");

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
                    res.render('teamtop.ejs',{teamdata: teamdata});
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
