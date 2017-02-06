var express = require('express');
var router = express.Router();
var format = require("../app/js/format/format.js");

/**
 * ログイン情報があるか確認する(session)
 * ログイン情報がなければlogin.jsへ遷移、あればindex.ejsへ遷移
 * req.session.user : session内ユーザーID情報
 */
const loginCheck = function(req, res, next) {

    if(req.session.admin){
        next();
    }else{
        res.redirect('/adminlogin');
    }
};

router.get('/', loginCheck, function(req, res) {

    res.render('admin.ejs');

});

router.post('/format', loginCheck, function(req, res) {
    format.format();
    res.render('adminconfirmation.ejs',{msg:'初期化しました',url:'/'});
});

module.exports = router;
