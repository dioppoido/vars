var express = require('express');
var router = express.Router();
var insertUser = require("../app/js/users/insertUser");
var getExternal = require("../app/js/users/getExternal");
var deleteExternal = require("../app/js/users/deleteExternal");




router.get('/', function(req, res) {
    if(req.session.admin){
      var json = {Admin_flag:true};
      var sort = {sort:{Address:1}};

      getExternal.getExternal(json,sort).then(function(userdata){
                res.render('adminedit.ejs',{userdata: userdata});
            });
        }else{
        res.redirect('/');
    }
});

router.post('/insert', function(req, res) {
      if(req.session.admin){
        var address = req.body.address;
        var admin_flag = true;
        var name = req.body.name;
        var pass = req.body.password;
        console.log("インサート" + address);
        const USERS={'Address':address,
                      'Admin_flag':admin_flag,
                      'Name'      :name,
                      'Password':pass};
        insertUser.insertUser(USERS);
        res.render('confirmation.ejs',{msg:'adminを追加しました',url:'/adminedit'});
      }else{
        res.redirect('/');
      }
});

router.post('/delete', function(req,res){
    if(req.session.admin){
      var address =req.body.deleteaddress;
      console.log("デリート" + address);
      // 選択が複数の場合
      if(address instanceof Array){
        for(var i=0;i<address.length;i++){
            deleteExternal.deleteExternal({"Address":address[i]});
          }
            res.render('confirmation.ejs',{msg:'ユーザーを削除しました',url:'/adminedit'});
        // 選択肢一つ
      }else{
        deleteExternal.deleteExternal({"Address":address});
        res.render('confirmation.ejs',{msg:'ユーザーを削除しました',url:'/adminedit'});                  }
      }
});

module.exports = router;
