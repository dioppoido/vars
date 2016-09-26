db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({ Userid:"0K01001" , Passwd:"0K01001" , Admin_flag:"false" , Address:"0K01001@test.com" ,Pass_flag:"true" , Username:"おそ松" });
db.users.insert({ Userid:"0K01002" , Passwd:"0K01002" , Admin_flag:"false" , Address:"0K01002@test.com" ,Pass_flag:"true" , Username:"カラ松" });
db.users.insert({ Userid:"0K01003" , Passwd:"0K01003" , Admin_flag:"false" , Address:"0K01003@test.com" ,Pass_flag:"true" , Username:"チョロ松" });
db.users.insert({ Userid:"0K01004" , Passwd:"0K01004" , Admin_flag:"false" , Address:"0K01004@test.com" ,Pass_flag:"true" , Username:"一松" });
db.users.insert({ Userid:"0K01005" , Passwd:"0K01005" , Admin_flag:"false" , Address:"0K01005@test.com" ,Pass_flag:"true" , Username:"十四松" });
db.users.insert({ Userid:"0K01006" , Passwd:"0K01006" , Admin_flag:"false" , Address:"0K01006@test.com" ,Pass_flag:"true" , Username:"トド松" });
db.users.insert({ Userid:"admin" , Passwd:"admin" , Admin_flag:"true" , Address:"admin@test.com" ,Pass_flag:"false" , Username:"管理者" });
