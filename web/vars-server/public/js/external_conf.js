//外部ユーザーチェックボックスのチェック数確認
function external_confirm(){

  var total = document.delete.address.length;
  var address = document.delete.address[0].checked;
  var cnt=0;
    for(var i=0;i<total;i++){
        if(document.delete.address[i].checked){
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
// 外部ユーザーインサートチェック
function external_check(){
  var username =document.insert.name.value;
  var address =document.insert.address.value;

  if(username.trim()==""){
    alert("登録したいユーザー名を入力してください");
    return false;
  }

  if(address.trim() == ""){
      alert("登録したいアドレスを入力してください");
      return false;
  }

  document.insert.name.value=username.trim();
  document.insert.address.value=address.trim();
  return true;
}

//adminユーザーチェックボックスのチェック数確認
function admin_confirm(){

  var total = document.delete.address.length;
  var address = document.delete.address[0].checked;
  var cnt=0;
    for(var i=0;i<total;i++){
        if(document.delete.address[i].checked){
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
// adminユーザーインサートチェック
function admin_check(){
  var username =document.insert.name.value;
  var address =document.insert.address.value;
  var password =document.insert.password.value;

  if(username.trim()==""){
    alert("登録したいユーザー名を入力してください");
    return false;
  }
  if(address.trim() == ""){
      alert("登録したいアドレスを入力してください");
      return false;
  }
  if(password.trim() == ""){
      alert("登録したいパスワードを入力してください");
      return false;
  }

  document.insert.name.value=username.trim();
  document.insert.address.value=address.trim();
  document.insert.password.value=password.trim();
  return true;
}
