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
    Image:"public/images/noimage.png"
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
    Image:"public/images/images.png"
});

db.events.insert({
    Eventid:"4",
    Eventname:"Soft4合評会",
    Overview:"SOft4合評会です。",
    Address:"test@example.com",
    Password:"password",
    displayName:"test",
    Fieldid:"all",
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
    Image:"public/images/images.png"
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
db.events.insert({
    Eventid:"6",
    Eventname:"2018デジタルワークス",
    Overview:"2018年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2016/12/15",
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
db.events.insert({
    Eventid:"7",
    Eventname:"2019デジタルワークス",
    Overview:"2019年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2016/12/16",
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
db.events.insert({
    Eventid:"8",
    Eventname:"2020デジタルワークス",
    Overview:"2020年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2016/12/17",
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
db.events.insert({
    Eventid:"8",
    Eventname:"2020デジタルワークス",
    Overview:"2020年度のデジタルワークスです。",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"ちか",
    Date:"2016/12/17",
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


