db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({ UserId:"0K01001" , Passwd:"0K01001" , admin_flag:"false" , address:"0K01001@test.com" ,Pass_flag:"false" , Username:"おそ松" });
db.users.insert({ UserId:"0K01002" , Passwd:"0K01002" , admin_flag:"false" , address:"0K01002@test.com" ,Pass_flag:"false" , Username:"カラ松" });
db.users.insert({ UserId:"0K01003" , Passwd:"0K01003" , admin_flag:"false" , address:"0K01003@test.com" ,Pass_flag:"false" , Username:"チョロ松" });
db.users.insert({ UserId:"0K01004" , Passwd:"0K01004" , admin_flag:"false" , address:"0K01004@test.com" ,Pass_flag:"false" , Username:"一松" });
db.users.insert({ UserId:"0K01005" , Passwd:"0K01005" , admin_flag:"false" , address:"0K01005@test.com" ,Pass_flag:"false" , Username:"十四松" });
db.users.insert({ UserId:"0K01006" , Passwd:"0K01006" , admin_flag:"false" , address:"0K01006@test.com" ,Pass_flag:"false" , Username:"トド松" });
db.users.insert({ UserId:"admin" , Passwd:"admin" , admin_flag:"true" , address:"admin@test.com" ,Pass_flag:"false" , Username:"管理者" });
