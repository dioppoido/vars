/**
 * userInsertクラス
 * @author 長谷川遼
 */
exports.insertUser = function(USERS){
  const mongoose = require('mongoose');
  const db = mongoose.createConnection('mongodb://mongo/vars');
  const schema = require('../db/schema');
  const Users = db.model('users', schema.users);
  const User = new Users(USERS);
  User.save();

};
