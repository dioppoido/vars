//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.teams.drop();
db.createCollection("teams");
db.teams.insert({
    Teamid:"1",
    Eventid:"1",
    Teamname:"アナログ撲滅委員会",
    Workname:"Aチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png"
});
db.teams.insert({
    Teamid:"2",
    Eventid:"1",
    Teamname:"PriMus",
    Workname:"Bチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png"
});
db.teams.insert({
    Teamid:"3",
    Eventid:"1",
    Teamname:"秋月コーポレーション",
    Workname:"Cチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png"
});
db.teams.insert({
    Teamid:"5",
    Eventid:"1",
    Teamname:"P2P",
    Workname:"AoI",
    Overview   :"概要",
    displayName :"小野先生",
    Address     :"onosenseee@gmail.com",
    Image       :"/upfile/vars.png"
});
db.teams.insert({
    Teamid:"4",
    Eventid:"2",
    Teamname:"PARM",
    Workname:"Dチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png"
});
