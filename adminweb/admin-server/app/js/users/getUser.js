exports.getUserjson = function(FIND){
    return new Promise(function (resolve, reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Users = db.model('users', schema.users);

        //ログイン照合
        Users.find(FIND, {},function(err, docs) {
            if (!err) {
                if (docs.length >0) {
                    resolve(docs);
                } else {
                    console.log("getAccount:"+"データがありません");
                    resolve(docs);
                }
            } else {
                var msg="getAccount:"+"DB Error."
                console.log(msg);
                resolve(msg);
            }
        });

    });
};