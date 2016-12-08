var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if(req.session.user){
        res.render('eventcontrol.ejs');
    } else{
        res.redirect('/');
    }

});

router.get('/eventsetting', function(req, res) {
    if(req.session.user){
        res.render('eventsetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.get('/votesetting', function(req, res) {
    if(req.session.user){
        res.render('votesetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.get('/fieldsetting', function(req, res) {
    if(req.session.user){
        res.render('fieldsetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.get('/announcesetting', function(req, res) {
    if(req.session.user){
        res.render('announcesetting.ejs');
    } else{
        res.redirect('/');
    }
});



module.exports = router;