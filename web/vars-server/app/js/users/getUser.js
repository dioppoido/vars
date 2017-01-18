/**
 * admingetクラス
 * @author 多田
 * @param Address : メールアドレス
 * @param Admin_flag : Adminフラグ
 * @returns {Promise}
 */

exports.getUser = function(Address){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const users = db.model('users', schema.users);

        //admin_flagがtrue
        users.find({Admin_flag:true}, {'_id':0 },function(err, docs) {
            console.log("getuserなう");
            if (!err) {
                if (docs.length === 1) {
                    resolve(docs);
                } else {
                    console.log("getAdmin:"+"データがありません");
                    resolve(docs);
                }
            } else {
                console.log("getAccount:"+"DB Error.");
                reject("getAdmin:"+err);
            }
        });

    });
};
