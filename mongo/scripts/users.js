//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({Address:"kd1166317@st.kobedenshi.ac.jp",Admin_flag:true});

/*過去データ
db.users.insert({ Userid:"0k01001" , Passwd:"0k01001" , Admin_flag:false , Address:"0k01001@test.com" ,Pass_flag:true , Username:"おそ松" });
db.users.insert({ Userid:"0k01002" , Passwd:"0k01002" , Admin_flag:false , Address:"0k01002@test.com" ,Pass_flag:true , Username:"カラ松" });
db.users.insert({ Userid:"0k01003" , Passwd:"0k01003" , Admin_flag:false , Address:"0k01003@test.com" ,Pass_flag:true , Username:"チョロ松" });
db.users.insert({ Userid:"0k01004" , Passwd:"0k01004" , Admin_flag:false , Address:"0k01004@test.com" ,Pass_flag:true , Username:"一松" });
db.users.insert({ Userid:"0k01005" , Passwd:"0k01005" , Admin_flag:false , Address:"0k01005@test.com" ,Pass_flag:true , Username:"十四松" });
db.users.insert({ Userid:"0k01006" , Passwd:"0k01006" , Admin_flag:false , Address:"0k01006@test.com" ,Pass_flag:true , Username:"トド松" });
db.users.insert({ Userid:"admin" , Passwd:"admin" , Admin_flag:true , Address:"admin@test.com" ,Pass_flag:false , Username:"管理者" });
db.users.insert({ Userid:"test" , Passwd:"test" , Admin_flag:false , Address:"admin@test.com" ,Pass_flag:true , Username:"テスト" });
*/