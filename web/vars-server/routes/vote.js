var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getTeam = require('../app/js/team/getTeam');
var getEvent = require('../app/js/event/getEvent');
var getVote=require('../app/js/votes/getVote');
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user && req.session.passflag == false){
        var eventid=req.query.eventid;
        getEvent.getEvent(eventid).then(function (eventdata) {
            getTeam.getTeam(eventid).then(function(teamdata){
                getVote.getVote(eventid).then(function (votedata) {
                    console.log("eventdata="+eventdata[0]);
                    res.render('vote.ejs',{
                        eventdata:eventdata,
                        teamdata:teamdata,
                        votedata:votedata,
                        teamnum: teamdata.length,
                        categorynum: votedata.length
                    });
                });
            });
        });
        //res.render('vote.ejs', {teamnum: 5, categorynum: 3});
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {

});

module.exports = router;