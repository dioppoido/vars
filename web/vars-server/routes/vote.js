var express = require('express');
var router = express.Router();
var validator = require('validator');
var getTeam = require('../app/js/team/getTeam');
var getEvent = require('../app/js/event/getEvent');
var getVote=require('../app/js/votes/getVote');
var insertVote=require('../app/js/votes/insertVote');

router.get('/', function(req, res) {
    if(req.session.user && req.session.passflag == false ){
        if(req.query.eventid) {
            var eventid = req.query.eventid;
            getEvent.getEvent(eventid).then(function (eventdata) {
                getTeam.getTeam(eventid).then(function (teamdata) {
                    getVote.getVote(eventid).then(function (votedata) {
                        console.log("eventdata=" + eventdata[0]);
                        res.render('vote.ejs', {
                            eventdata: eventdata,
                            teamdata: teamdata,
                            votedata: votedata,
                            teamnum: teamdata.length,
                            categorynum: votedata.length
                        });
                    });
                });
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
    if(req.session.user && req.session.passflag == false ) {
        var AGGREGATES = [];
        var userid = req.session.user;
        var voteid = req.body.voteid;
        var teamid = req.body.teamid;
        var teamidlength = teamid.length;
        for (i = 0; i < teamidlength; i++) {
            const WORK_JSON = {
                'voteid': null,
                'userid': null,
                'teamid': null
            };
            WORK_JSON.voteid = req.body.voteid[i];
            WORK_JSON.userid = req.session.user;
            WORK_JSON.teamid = req.body.teamid[i];

            AGGREGATES.push(WORK_JSON);

            console.log(AGGREGATES[i]);


        };
        insertVote.insertVote(AGGREGATES);
        res.redirect('/voteresult');
    }else{
        res.redirect('/');
    }
  

});

module.exports = router;
