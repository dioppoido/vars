function change_pass(){
    var status  = document.forms.eventcreate.passarea.disabled;
    console.log("エリア" + status);
    if (status == true){
        status = "";
    }
}
