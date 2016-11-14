//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.events.drop();
db.createCollection("events");
db.events.insert({
    Eventid:"1",
    Eventname:"イベントA",
    Overview:"イベントAの説明です",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"soft",
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
    Image:"public/images/noimage.png"
});
db.events.insert({
    Eventid:"3",
    Eventname:"イベントC",
    Overview:"イベントCの説明です",
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
    Image:"public/image/images.png"
});

db.events.insert({
    Eventid:"4",
    Eventname:"itfes",
    Overview:"itフェスです",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"game",
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
    Image:"upfile/5f609a5b5d23d5fec7865efa0bdc73bc.jpg"
});
