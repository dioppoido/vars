/**
 * データベースのスキーマ
 * @author 多田
 */

const mongoose = require('mongoose');

/** -- sams ---------- */

/**
 * users
 */
exports.users = new mongoose.Schema({
  UserId      :String,          //ユーザID
  Passwd      :String,          //パスワード
  admin_flag  :Boolean,         //管理者フラグ
  address     :String,          //E-Mailアドレス
  Pass_flag   :Boolean,         //パスワード変更フラグ
  Username    :String           //名前
});
