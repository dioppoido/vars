/**
 * getSamsusers.js
 * @auter 土居幸太郎
 */
const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://mongo/vars');
const schema = require('../../js/db/schema');
const Users = db.model('users', schema.users);

exports.getUser=function(){
    return new Promise(function(resolve, reject){
        console.log('getUser.js');
        var ret;
        Users.find({}, {}, function (err, docs) {
            if (!err) {
                ret=docs;
            }
            else {
                ret='err';
            }
            resolve(ret);
        });
    });
}