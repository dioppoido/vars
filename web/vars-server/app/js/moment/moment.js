/**
 * moment fomat
 * @author 多田
 */
 var moment = require('moment');
moment.locale('ja',{weekdays: ["日","月","火","水","木","金","土"]});

//console.log("momentない");

//現在日時を取得
exports.todate = function(){
 return moment().format('YYYY/MM/D(dddd)');
};

exports.parsedate = function(date){
 return moment(date,'YYYY-MM-D HH:mm:ss').format();
};

exports.parsedate = function(date,format){
 return moment(date,'YYYY-MM-D HH:mm:ss').format(format);
};
