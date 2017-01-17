/**
 * userInsertクラス
 * @author 長谷川遼
 */
exports.insertUser = function(Userdata){
  const mongoose = require('mongoose');
  const db = mongoose.createConnection('mongodb://mongo/vars');
  const schema = require('../db/schema');
  const Votes = db.model('users', schema.users);
  const User = new Users(Userdata);
  User.save();

};
