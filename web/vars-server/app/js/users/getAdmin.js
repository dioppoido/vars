/**
 * admin判別クラス
 * @author 長谷川
 * @param Address : メールアドレス
 * @param Admin_flag : Adminフラグ
 * @returns {Promise}
 */

exports.getAdmin = function(Address){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Admin = db.model('users', schema.users);

        //ログイン照合
        Admin.find({Address:Address}, {'_id':0 },function(err, docs) {
            console.log("getAdminに遷移");
            if (!err) {
                if (docs.length === 1) {
                    resolve(docs);
                } else {
                    console.log("getAccount:"+"データがありません");
                    reject("getAdmin:"+"DATA NOT FOUND");
                }
            } else {
                console.log("getAccount:"+"DB Error.");
                reject("getAdmin:"+err);
            }
        });

    });
};
