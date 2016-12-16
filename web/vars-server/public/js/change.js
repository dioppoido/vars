/* eventcreate eventsetting ejs*/
function change_pass(obj){

    var status = obj.checked;
    var formname = obj.parentNode.parentNode.parentNode.parentNode.name;
    var passarea = document.forms[formname].passarea;

    if(status === true){
        $("#passarea").prop('disabled', false);
    }else if(status === false){
        $("#passarea").prop('disabled', true);
    }

}

/* fieldsetting.ejs */
function change_field(obj){
    
    var idx = obj.selectedIndex;
    var value = obj.options[idx].value; // 値
    var text  = obj.options[idx].text;  // 表示テキスト
    console.log("値:" + value);
    console.log("テキスト:" + text);

}
