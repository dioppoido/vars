var express = require('express');
var router = express.Router();
var getExternal = require("../app/js/users/getExternal");
var insertUser = require("../app/js/users/insertUser");
var deleteExternal = require("../app/js/users/deleteExternal");

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

    var json = {Admin_flag:false};
    var sort = {sort:{Address:1}};

    getExternal.getExternal(json,sort).then(function(userdata){
        res.render('externaledit.ejs',{userdata:userdata});


  });
});

router.post('/insert', function(req, res) {
      if(req.session.admin){
        var address = req.body.address;
        var admin_flag = false;
        var name = req.body.name;
        const USERS={'Address':address,
                      'Admin_flag':admin_flag,
                      'Name'  :name};
        insertUser.insertUser(USERS);
        res.render('confirmation.ejs',{msg:'外部ユーザーを追加しました',url:'/externaledit'});
      }else{
        res.redirect('/');
      }
});

router.post('/delete', function(req,res){
    if(req.session.admin){
      var address = [];
      address =req.body.address;
      // 選択が複数の場合
      if(address instanceof Array){
        for(var i=0;i<address.length;i++){
            deleteExternal.deleteExternal({"Address":address[i]});
          }
            res.render('confirmation.ejs',{msg:'ユーザーを削除しました',url:'/externaledit'});
        // 選択肢一つ
      }else{
        deleteExternal.deleteExternal({"Address":address});
        res.render('confirmation.ejs',{msg:'ユーザーを削除しました',url:'/externaledit'});                  }
      }
});

module.exports = router;
