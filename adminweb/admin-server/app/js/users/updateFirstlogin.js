/**
 * 初回ログイン時変更処理
 * @author 長谷川遼
 * @param userid : ユーザーID
 * @returns {Promise}
 */
exports.updateFirstlogin = function(userid,newpass){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const users = db.model('users', schema.users);
    var msg="";   //返り値（メッセージ）

    //パスワード変更処理
    users.update({Userid:userid}, {Passwd:newpass,Pass_flag:false},function(err) {
        if (!err) {


        } else {
            console.log("getPassword:" + "DB Error.");
        }
    });

};
