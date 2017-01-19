function external_confirm(){

  var total = document.externaldelete.address.length;
  var address = document.externaldelete.address[0].checked;
  var cnt=0;
    for(var i=0;i<total;i++){
        if(document.externaldelete.address[i].checked){
            cnt++;
        }
    }
    if(cnt!=0){
              return true;
    }else{
              alert("削除するユーザーを選択してください");
              return false;
    }
}
