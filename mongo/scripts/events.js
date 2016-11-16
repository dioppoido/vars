//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.events.drop();
db.createCollection("events");
db.events.insert({
    Eventid:"1",
    Eventname:"イベントA",
    Overview:"イベントAの説明です",
    Password:"",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"南館1階B教室",
    Date:"2016/10/12",
    Createperiod:{
        Createstart:"2016/10/4 9:00",
        Createfinish:"2016/10/11 15:00"
    },
    Voteperiod:{
        Votestart:"2016/10/12 9:00",
        Votefinish:"2016/10/20 15:00"
    },
    Image:"public/images/noimage.png"
});

db.events.insert({
    Eventid:"2",
    Eventname:"イベントB",
    Overview:"イベントBの説明です",
    Password:"password",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"hard",
    Venue:"ホワイエ",
    Date:"2016/10/21",
    Createperiod:{
        Createstart:"2016/10/12 9:00",
        Createfinish:"2016/10/20 12:00"
    },
    Voteperiod:{
        Votestart:"2016/10/21 9:00",
        Votefinish:"2016/10/31 12:00"
    },
    Image:"public/images/goripic/drinkgori.png"
  });
db.events.insert({
    Eventid:"3",
    Eventname:"イベントC",
    Overview:"イベントCの説明です",
    Password:"password",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"game",
    Venue:"ソニックホール",
    Date:"2016/11/1",
    Createperiod:{
        Createstart:"2016/10/21 12:00",
        Createfinish:"2016/10/31 15:00"
    },
    Voteperiod:{
        Votestart:"2016/11/1 12:00",
        Votefinish:"2016/11/10 15:00"
    },
    Image:"public/images/goripic/fightgori.png"
  });

db.events.insert({
    Eventid:"4",
    Eventname:"Soft4合評会",
    Overview:"SOft4合評会です。",
    Address:"test@example.com",
    Password:"password",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2016/12/11",
    Createperiod:{
        Createstart:"2016/12/21 12:00",
        Createfinish:"2016/12/31 15:00"
    },
    Voteperiod:{
        Votestart:"2016/12/1 12:00",
        Votefinish:"2016/12/10 15:00"
    },
    Image:"public/images/goripic/gori.png"
  });
db.events.insert({
    Eventid:"5",
    Eventname:"2017デジタルワークス",
    Overview:"2017年度のデジタルワークスです。",
    Password:"",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2017/12/11",
    Createperiod:{
        Createstart:"2017/12/21 12:00",
        Createfinish:"2017/12/31 15:00"
    },
    Voteperiod:{
        Votestart:"2017/12/1 12:00",
        Votefinish:"2017/12/10 15:00"
    },
    Image:"public/images/goripic/gori2.png"
  });
db.events.insert({
    Eventid:"6",
    Eventname:"2018デジタルワークス",
    Overview:"2018年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2018/12/15",
    Createperiod:{
        Createstart:"2018/12/21 12:00",
        Createfinish:"2018/12/31 15:00"
    },
    Voteperiod:{
        Votestart:"2018/12/1 12:00",
        Votefinish:"2018/12/10 15:00"
    },
    Image:"public/images/goripic/heartgori.png"
  });
db.events.insert({
    Eventid:"7",
    Eventname:"2019デジタルワークス",
    Overview:"2019年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2019/12/16",
    Createperiod:{
        Createstart:"2019/12/21 12:00",
        Createfinish:"2019/12/31 15:00"
    },
    Voteperiod:{
        Votestart:"2019/12/1 12:00",
        Votefinish:"2019/12/10 15:00"
    },
    Image:"public/images/goripic/nakugori.png"});

db.events.insert({
    Eventid:"8",
    Eventname:"2020デジタルワークス",
    Overview:"2020年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2020/12/17",
    Createperiod:{
        Createstart:"2020/12/21 12:00",
        Createfinish:"2020/12/31 15:00"
    },
    Voteperiod:{
        Votestart:"2020/12/1 12:00",
        Votefinish:"2020/12/10 15:00"
    },
    Image:"public/images/goripic/nicegori.png"
  });

db.events.insert({
  Password:"",
Eventid:"10",
Eventname:"文化祭",
Overview:"文化祭のガラオケ募集",
Address:"test@example.com",
displayName:"test",
Fieldid:"all",
Venue:"本館地下１F",
Date:"2016/10/30",
Createperiod:{
    Createstart:"2016/10/4 9:00",
    Createfinish:"2016/10/11 15:00"
},
Voteperiod:{
    Votestart:"2016/10/30 9:00",
    Votefinish:"2016/10/31 15:00"
},
    Image:"public/images/goripic/yeahgori.png"
  });

db.events.insert({
Eventid:"16",
Eventname:"クリスマス",
Overview:"クリぼっち募集",
Password:"",
Address:"test@example.com",
displayName:"test",
Fieldid:"all",
Venue:"本館地下10F",
Date:"2016/12/25",
Createperiod:{
    Createstart:"2016/10/4 9:00",
    Createfinish:"2016/10/11 15:00"
},
Voteperiod:{
    Votestart:"2016/12/25 9:00",
    Votefinish:"2016/12/25 15:00"
},
    Image:"public/images/goripic/tameikigori.png"
  });


db.events.insert({
Eventid:"12",
Eventname:"2016ゲーム分野１年合評会",
Overview:"2016ゲーム分野１年合評会をしますの",
Password:"1111",
Address:"test@example.com",
displayName:"test",
Fieldid:"game",
Venue:"本館地下0F",
Date:"2016/12/25",
Createperiod:{
    Createstart:"2016/10/4 9:00",
    Createfinish:"2016/10/11 15:00"
},
Voteperiod:{
    Votestart:"2016/12/25 9:00",
    Votefinish:"2016/12/25 15:00"
},
Image:"public/images/noimage.png"
});

db.events.insert({
Eventid:"13",
Eventname:"2016グラフィック分野１年合評会",
Overview:"2016グラフィック分野１年合評会をしますの",
Password:"",
Address:"test@example.com",
displayName:"test",
Fieldid:"graphic",
Venue:"本館地下0F",
Date:"2016/1/25",
Createperiod:{
    Createstart:"2016/1/4 9:00",
    Createfinish:"2016/1/11 15:00"
},
Voteperiod:{
    Votestart:"2016/1/25 9:00",
    Votefinish:"2016/1/25 15:00"
},
    Image:"public/images/goripic/heart.png"
  });
