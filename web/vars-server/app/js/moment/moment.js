/**
 * moment fomat
 * @author 多田
 */
 var moment = require('moment');
moment.locale('ja',{weekdays: ["日","月","火","水","木","金","土"]});

//console.log("momentない");

//現在日時を取得
exports.todate = function(format){
 return moment().format(format);
};

exports.parsedate = function(date){
 return moment(date,'YYYY-MM-D HH:mm:ss').format();
};

exports.parsedate = function(date,format){
 return moment(date,'YYYY-MM-D HH:mm:ss').format(format);
};

/* 投票の日付比較関数 */
exports.comparison = function(today,votestart,votefinish){

  var vote_flag;
  console.log("当日" + today);
  console.log("投票開始" + votestart);
  console.log("投票終了" + votefinish);
  //日付比較
  vote_flag = moment(today).isBetween(votestart, votefinish);
  console.log("投票フラグ" + vote_flag);

  return  vote_flag;
};