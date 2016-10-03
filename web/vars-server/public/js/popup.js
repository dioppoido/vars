$(function(){
    PNotify.prototype.options.styling = "fontawesome";
    new PNotify({
        title: 'Vars Test', //タイトル
        text: 'Vars Pop-up Modal!!', //テキスト
        hide: false //ポップアップの自動消去
    });
});