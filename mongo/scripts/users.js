//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.users.drop();
db.createCollection("users");


db.users.insert({Address:"admin",Admin_flag:true,Name:"管理者",Password:"admin"});
