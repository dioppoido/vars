/**
 * insertTeamクラス
 * @author Daiky Yamaguchi
 * 格納するイベントデータをあらかじめJSON形式で入れておく必要があります
 * @param TEAMS :
    * @param TEAMS.Teamname : チーム名
     * @param TEAMS.Teamid : チームID
     * @param TEAMS.Eventid : イベントID
     * @param TEAMS.Systemname : システム名
     * @param TEAMS.teammember : チームメンバー//まだいらない
     * @param TEAMS.Overview : 概要
     * @param TEAMS.displayName : 代表者
     * @param TEAMS.Address : メールアドレス
     * @param TEAMS.Image : サムネイル
     * @param TEAMS.Works : PDF,チラシアップ場所
     * @param TEAMS.Department : 部門
     * @param TEAMS.Order : 発表順番
 */

exports.insertTeam = function(TEAMS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const TEAM = db.model('teams', schema.teams);
    //insert処理
    const insertteam=new TEAM(TEAMS);
    insertteam.save();
};
