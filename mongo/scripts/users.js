//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({Address:"kd1166317@st.kobedenshi.ac.jp",Admin_flag:true,Name:"土居幸太郎",Password:"password"}); //土居君のkdアカウント
db.users.insert({Address:"kd1176004@st.kobedenshi.ac.jp",Admin_flag:true,Name:"長谷川遼",Password:"password"}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1172408@st.kobedenshi.ac.jp",Admin_flag:true,Name:"山口大貴",Password:"password"}); //山口大貴のkdアカウント
db.users.insert({Address:"kd1150777@st.kobedenshi.ac.jp",Admin_flag:true,Name:"土田昇平",Password:"password"}); //土田昇平のkdアカウント
db.users.insert({Address:"kd1147686@st.kobedenshi.ac.jp",Admin_flag:true,Name:"多田涼太",Password:"password"}); //多田涼太のkdアカウント