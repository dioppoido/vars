/**
 * insertEventクラス
 * @author 長谷川遼,土居幸太郎
 * 格納するイベントデータをあらかじめJSON形式で入れておく必要があります
 * @param EVENTS :
    * @param EVENTS.Eventid : イベントID
     * @param EVENTS.Eventname : イベント名
     * @param EVENTS.Overview : イベント概要
     * @param EVENTS.Password : イベントパスワード
     * @param EVENTS.Address : 主催者のメールアドレス（ユーザーのログイン情報のセッションから取得してください）
     * @param EVENTS.displayName : 主催者の名前（ユーザーのログイン情報のセッションから取得してください）
     * @param EVENTS.Field : コース名
     * @param EVENTS.Venue : 開催場所
     * @param EVENTS.Date : 開催日時
     * @param EVENTS.Createperiod :
        * @param EVENTS.Createperiod.Createstart : チーム作成期間開始日
        * @param EVENTS.Createperiod.Createfinish : チーム作成期間終了日
     * @param EVENTS.Voteperiod :
        * @param EVENTS.Voteperiod.Votestart : 投票期間開始日
        * @param EVENTS.Voteperiod.Votefinish : 投票期間終了日
     * @param EVENTS.Image : サムネイルのPath
 */

exports.insertEvent = function(EVENTS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const Events = db.model('events', schema.events);
    //insert処理
    const insertevents=new Events(EVENTS);
    insertevents.save();

};
