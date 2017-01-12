//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");

db.users.insert({Address:"kd1166317@st.kobedenshi.ac.jp",Admin_flag:true}); //土居君のkdアカウント
db.users.insert({Address:"kd1176004@st.kobedenshi.ac.jp",Admin_flag:true}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1172408@st.kobedenshi.ac.jp",Admin_flag:true}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1150777@st.kobedenshi.ac.jp",Admin_flag:true}); //長谷川遼のkdアカウント
db.users.insert({Address:"kd1147686@st.kobedenshi.ac.jp",Admin_flag:true}); //多田涼太のkdアカウント
