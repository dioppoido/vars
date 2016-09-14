/**
 * データベースのスキーマ
 * @author 土居
 */

const mongoose = require('mongoose');

/** -- vars ---------- */

/**
 * users
 */
exports.users = new mongoose.Schema({
  userId      :String,
  name        :String,
  passwd      :String,
  cardId      :String
});

