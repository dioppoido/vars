var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getTeam = require('../app/js/team/getTeam');
var getEvent = require('../app/js/event/getEvent');
var getVote=require('../app/js/votes/getVote');
var insertVote=require('../app/js/votes/insertVote')
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
  /*var AGGREGATES = [];
  var userid = req.session.user;
  var voteid = req.body.voteid;
  var teamid = req.body.teamid;
  var teamidlength = teamid.length;
  for(i=0; i < teamidlength; i++ ){
    var wrok_json = {
      'voteid' : null,
      'userid' : null,
      'teamid' : null
    };
    work_json.voteid=req.body.voteid[i];
    wrok_json.userid=req.session.user;
    wrok_json.teamid=req.body.teamid[i];
    console.log(aggregates.voteid);
    console.log(aggregates.userid);
    console.log(aggregates.teamid);

  }*/
  insertVote.insertVote();

});

module.exports = router;
