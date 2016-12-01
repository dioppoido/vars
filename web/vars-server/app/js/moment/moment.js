/**
 * moment fomat
 * @author 多田
 */
 var moment = require('moment');
moment.locale('ja',{weekdays: ["日","月","火","水","木","金","土"]});

//console.log("momentない");

//現在日時を取得（そのまま）
exports.todate = function(){
 return moment().format();
};

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
exports.comparison = function(today,start,finish){

  var flag;
  console.log("当日" + today);
  console.log("開始" + start);
  console.log("終了" + finish);
  //日付比較
  flag = moment(today).isBetween(start, finish);
  console.log("フラグ" + flag);

  return  flag;
};
