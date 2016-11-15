function change_pass(){

    var button = document.forms.eventcreate.passbutton;
    var status  = document.forms.eventcreate.passarea;

    if(status.disabled === true){
        button.innerHTML = "パスワード設定OFF";
        $("#passarea").prop('disabled', false);
    }else if(status.disabled === false){
        button.innerHTML = "パスワード設定ON";
        status.value = "";
        $("#passarea").prop('disabled', true);
    }
}
