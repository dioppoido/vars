function change_pass_setting(){

    var button = document.forms.eventsetting.passtoggle;
    var status  = document.forms.eventsetting.passarea;

    if(status.disabled === true){
        $("#passarea").prop('disabled', false);
    }else if(status.disabled === false){
        $("#passarea").prop('disabled', true);
    }
}

function change_field(obj){

    var idx = obj.selectedIndex;
    var value = obj.options[idx].value; // 値
    var text  = obj.options[idx].text;  // 表示テキスト
    console.log("値:" + value);
    console.log("テキスト:" + text);

}
