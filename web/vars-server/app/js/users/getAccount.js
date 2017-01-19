/**
 * アカウント照合クラス
 * @author 土田
 * @param userid : ユーザーID
 * @param passwd : パスワード
 * @returns {Promise}
 */

exports.getAccount = function(userid, passwd){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Account = db.model('users', schema.users);

        //ログイン照合
        Account.find({Address:userid, Password:passwd}, {'_id':0 },function(err, docs) {
            if (!err) {
                if (docs.length === 1) {
                    resolve(docs);
                } else {
                    console.log("getAccount:"+"データがありません");
                    resolve("");
                }
            } else {
                console.log("getAccount:"+"DB Error.");
                resolve("");
            }
        });

    });
};
