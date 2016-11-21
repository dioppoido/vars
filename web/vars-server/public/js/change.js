function change_pass(){

    var button = document.forms.eventcreate.passbutton;
    var status  = document.forms.eventcreate.passarea;

    if(status.disabled === true){
        button.innerHTML = "パスワード設定OFF";
        button.style.backgroundColor = '#337ab7';
        button.style.borderColor = '#2e6da4';
        button.style.color = 'white';
        $("#passarea").prop('disabled', false);
    }else if(status.disabled === false){
        button.innerHTML = "パスワード設定ON";
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
        status.value = "";
        $("#passarea").prop('disabled', true);
    }
}
