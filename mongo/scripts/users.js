//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({Address:"kd1166317@st.kobedenshi.ac.jp",Admin_flag:true,Name:"土居幸太郎",Password:"password"}); //土居君のkdアカウント
db.users.insert({Address:"kd1176004@st.kobedenshi.ac.jp",Admin_flag:true,Name:"長谷川遼",Password:"password"}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1172408@st.kobedenshi.ac.jp",Admin_flag:true,Name:"山口大貴",Password:"password"}); //山口大貴のkdアカウント
db.users.insert({Address:"kd1150777@st.kobedenshi.ac.jp",Admin_flag:true,Name:"土田昇平",Password:"password"}); //土田昇平のkdアカウント
db.users.insert({Address:"kd1147686@st.kobedenshi.ac.jp",Admin_flag:true,Name:"多田涼太",Password:"password"}); //多田涼太のkdアカウント

db.users.insert({Address:"kd1166317",Admin_flag:false,Name:"土居A太郎",Password:"password"}); //土居君のkdアカウント
db.users.insert({Address:"kd1176004",Admin_flag:false,Name:"長谷川A",Password:"password"}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1172408",Admin_flag:false,Name:"山口A貴",Password:"password"}); //山口大貴のkdアカウント
db.users.insert({Address:"kd1150777",Admin_flag:false,Name:"土田A平",Password:"password"}); //土田昇平のkdアカウント
db.users.insert({Address:"kd1147686",Admin_flag:false,Name:"多田A太",Password:"password"}); //多田涼太のkdアカウント
//外部ユーザー（テスト）
db.users.insert({Address:"test1",Admin_flag:false,Name:"TEST1",Password:"password"});
db.users.insert({Address:"test2",Admin_flag:false,Name:"TEST2",Password:"password"});
db.users.insert({Address:"test3",Admin_flag:false,Name:"TEST3",Password:"password"});
db.users.insert({Address:"test4",Admin_flag:false,Name:"TEST4",Password:"password"});
db.users.insert({Address:"test5",Admin_flag:false,Name:"TEST5",Password:"password"});
//デモで使う
db.users.insert({Address:"hasse12317961@gmail.com",Admin_flag:false,Name:"長谷川遼",Password:"password"});
