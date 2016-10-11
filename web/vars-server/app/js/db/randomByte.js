/**
 * ランダム文字列生成関数
 * @author 土居
 */

exports.randomByte=function(){
    return require('crypto').randomBytes(8).toString('hex');
}
