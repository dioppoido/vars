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
      if( userdata.length == 0){
        res.render('externaledit.ejs',{userdata:userdata});
      }else{
          res.render('externaledit.ejs',{userdata:userdata});
      }
  });
});

router.post('/', loginCheck, function(req, res) {

    getExternal.getExternal({"Address":req.body.address},{}).then(function(userdata){
            // console.log(userdata);
            var mode="";
            mode=req.body.mode;
            if(mode=="insert"){
              var username = req.body.username;
              var admin_flag = false;
              // var password = req.body.password;
              var address = req.body.address;
              var insertjson= {
                                  "Name":username,
                                  "Address":address,
                                  "Admin_flag":admin_flag,
                                  // "Password":password
                                };
                if(userdata==""){
                  insertUser.insertUser(insertjson);
                  res.render('confirmation.ejs',{msg:'ユーザーを追加しました',url:'/externaledit'});
                }else{
                  res.render('confirmation.ejs',{msg:'そのユーザーはすでに追加されています',url:'/externaledit'});
                }
            }
            else if(mode=="delete"){
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
        });

module.exports = router;
