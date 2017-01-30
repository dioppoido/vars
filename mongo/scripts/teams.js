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
    Eventid:"3",
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
//以下合評会用テストデータ
//eventid 17    アナログ用テストデータ
db.teams.insert({
    Teamid:"29",
    Eventid:"17",
    Teamname:"秋月コーポレーション",
    Workname:"君の就活は。",
    Overview   :"概要",
    displayName :"社長",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"9"],
    Order       :1
});
db.teams.insert({
    Teamid:"30",
    Eventid:"17",
    Teamname:"PriMus",
    Workname:"e-Tactix",
    Overview   :"概要",
    displayName :"土肥君",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"9"],
    Order       :2
});
db.teams.insert({
    Teamid:"31",
    Eventid:"17",
    Teamname:"アナログ撲滅委員会",
    Workname:"VARS",
    Overview   :"概要",
    displayName :"長谷川",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"9"],
    Order       :3
});
db.teams.insert({
    Teamid:"32",
    Eventid:"17",
    Teamname:"PARM",
    Workname:"I'Mee",
    Overview   :"概要",
    displayName :"山中君",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"9"],
    Order       :4
});
db.teams.insert({
    Teamid:"33",
    Eventid:"17",
    Teamname:"E班",
    Workname:"入力補助ツール",
    Overview   :"概要",
    displayName :"松本君",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1',"9"],
    Order       :5
});
//eventid 18 デジタル用のテストデータ
db.teams.insert({
    Teamid:"34",
    Eventid:"18",
    Teamname:"秋月コーポレーション",
    Workname:"君の就活は。",
    Overview   :"概要",
    displayName :"社長",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2','voteid3','voteid4',"10","11","12","13"],
    Order       :1
});
db.teams.insert({
    Teamid:"35",
    Eventid:"18",
    Teamname:"PriMus",
    Workname:"e-Tactix",
    Overview   :"概要",
    displayName :"土肥",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2','voteid3','voteid4',"10","11","12","13"],
    Order       :2
});
db.teams.insert({
    Teamid:"36",
    Eventid:"18",
    Teamname:"アナログ撲滅委員会",
    Workname:"VARS",
    Overview   :"概要",
    displayName :"長谷川",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2','voteid3','voteid4',"10","11","12","13"],
    Order       :3
});
db.teams.insert({
    Teamid:"37",
    Eventid:"18",
    Teamname:"PARM",
    Workname:"I'Mee",
    Overview   :"概要",
    displayName :"山中君",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/imee.pdf",
    Department  :['voteid1','voteid2','voteid3','voteid4',"10","11","12","13"],
    Order       :4
});
db.teams.insert({
    Teamid:"38",
    Eventid:"18",
    Teamname:"E班",
    Workname:"入力補助ツール",
    Overview   :"概要",
    displayName :"松本君",
    Address     :"nakatugawa@gmail.com",
    Image       :"public/images/noimage.png",
    Works       :"public/images/noimage.png",
    Department  :['voteid1','voteid2','voteid3','voteid4',"10","11","12","13"],
    Order       :5
});
