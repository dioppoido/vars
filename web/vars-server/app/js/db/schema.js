/**
 * データベースのスキーマ
 * @author 多田
 */

const mongoose = require('mongoose');

/** -- vars ---------- */

/**
 * users
 */
exports.users = new mongoose.Schema({
  Userid      :String,          //ユーザID
  Passwd      :String,          //パスワード
  Admin_flag  :Boolean,         //管理者フラグ
  Address     :String,          //E-Mailアドレス
  Pass_flag   :Boolean,         //パスワード変更フラグ
  Username    :String           //名前
});
