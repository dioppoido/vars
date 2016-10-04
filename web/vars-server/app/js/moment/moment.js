/**
 * moment fomat
 * @author 多田
 */
 var moment = require('moment');
//console.log("momentない");

//現在日時を取得
exports.todate = function(){
 return moment().format('YYYY/MM/D');
};

exports.parsedate = function(date){
 return moment().format('YYYY/MM/D HH:mm:ss');
};
