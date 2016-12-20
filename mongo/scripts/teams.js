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
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"1","2"],
    Order       :1
});
db.teams.insert({
    Teamid:"2",
    Eventid:"1",
    Teamname:"PriMus",
    Workname:"Bチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"2","3"],
    Order       :2
});
db.teams.insert({
    Teamid:"3",
    Eventid:"1",
    Teamname:"秋月コーポレーション",
    Workname:"Cチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"1","3"],
    Order       :3
});
db.teams.insert({
    Teamid:"5",
    Eventid:"1",
    Teamname:"P2P",
    Workname:"AoI",
    Overview   :"概要",
    displayName :"小野先生",
    Address     :"onosenseee@gmail.com",
    Image       :"upfile/vars.png",
    Works       :"upfile/test.pdf",
    Department  :['voteid1','voteid2',"4","2"],
    Order       :4
});
db.teams.insert({
    Teamid:"4",
    Eventid:"2",
    Teamname:"PARM",
    Workname:"Dチームの作品",
    Overview   :"概要",
    displayName :"土井",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"1"],
    Order       :5
});
db.teams.insert({
    Teamid:"6",
    Eventid:"1",
    Teamname:"PARSSSSM",
    Workname:"Dチームの作品",
    displayName :"土井",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"4","3"],
    Order       :6
});
//以下中間発表用に作成 去年のデジタルワークスのチーム一覧
db.teams.insert({
    Teamid:"20",
    Eventid:"15",
    Teamname:"FLC",
    Workname:"BAR CODE MONSTER",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"5","8"],
    Order       :1
});
db.teams.insert({
    Teamid:"21",
    Eventid:"15",
    Teamname:"S班",
    Workname:"Garbage Collection",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"5","8"],
    Order       :2
});
db.teams.insert({
    Teamid:"22",
    Eventid:"15",
    Teamname:"TIER",
    Workname:"tie",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"6","8"],
    Order       :3
});
db.teams.insert({
    Teamid:"23",
    Eventid:"15",
    Teamname:"4K3Ts",
    Workname:"Photo Location",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"6","8"],
    Order       :4
});
db.teams.insert({
    Teamid:"24",
    Eventid:"15",
    Teamname:"K.Smith",
    Workname:"Twi-Pedia",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"6","8"],
    Order       :5
});
db.teams.insert({
    Teamid:"25",
    Eventid:"15",
    Teamname:"priMus",
    Workname:"Dresslan",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"7","8"],
    Order       :6
});
db.teams.insert({
    Teamid:"26",
    Eventid:"15",
    Teamname:"p2p",
    Workname:"AoI",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"7","8"],
    Order       :7
});
db.teams.insert({
    Teamid:"27",
    Eventid:"15",
    Teamname:"fixa",
    Workname:"Patet",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2',"7","8"],
    Order       :8
});
db.teams.insert({
    Teamid:"28",
    Eventid:"15",
    Teamname:"書籍堂",
    Workname:"BOOKSelf",
    displayName :"長谷川",
    Overview   :"概要",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"8"],
    Order       :9
});
