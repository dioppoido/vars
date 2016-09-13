db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({ userId:"teacher" , name:"教員" , passwd:"tea" , cardId:"none" });

db.users.insert({ userId:"0K01001" , name:"佐藤一郎" , passwd:"2222" , cardId:"qwerty" });
db.users.insert({ userId:"0K01002" , name:"鈴木二郎" , passwd:"3333" , cardId:"a123" });
db.users.insert({ userId:"0K01003" , name:"田中三郎" , passwd:"4444" , cardId:"b123" });
db.users.insert({ userId:"0K01004" , name:"田中四郎" , passwd:"4444" , cardId:"b123" });
db.users.insert({ userId:"0K01005" , name:"田中五郎" , passwd:"4444" , cardId:"b123" });
db.users.insert({ userId:"0K01006" , name:"田中六郎" , passwd:"4444" , cardId:"b123" });
db.users.insert({ userId:"test" , name:"SAMS・SAMS・SAMS" , passwd:"tes" , cardId:"b123" });
db.users.insert({ userId:"first" , name:"first" , passwd:"first" , cardId:"b123" });
