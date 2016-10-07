//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.events.drop();
db.createCollection("events");
db.events.insert({
    Eventid:1,
    Eventname:"イベントA",
    Overview:"イベントAの説明です",
    Createperiod:{
        Createstart:"2016/10/4",
        Createfinish:"2016/10/11"
    },
    Voteperiod:{
        Votestart:"2016/10/12",
        Votefinish:"2016/10/20"
    }
});
db.events.insert({
    Eventid:2,
    Eventname:"イベントB",
    Overview:"イベントBの説明です",
    Createperiod:{
        Createstart:"2016/10/12",
        Createfinish:"2016/10/20"
    },
    Voteperiod:{
        Votestart:"2016/10/21",
        Votefinish:"2016/10/31"
    }
});
db.events.insert({
    Eventid:3,
    Eventname:"イベントC",
    Overview:"イベントCの説明です",
    Createperiod:{
        Createstart:"2016/10/21",
        Createfinish:"2016/10/31"
    },
    Voteperiod:{
        Votestart:"2016/11/1",
        Votefinish:"2016/11/10"
    }
});