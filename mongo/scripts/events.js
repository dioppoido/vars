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
    Image:""
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
    Image:""
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
    Image:""
});
