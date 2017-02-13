//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.events.drop();
db.createCollection("events");
// db.events.insert({
//     Eventid: "1",
//     Eventname: "イベントA",
//     Overview: "イベントAの説明です",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "南館1階B教室",
//     Holdperiod: {
//         Holdstart: "2016/11/09 9:00",
//         Holdfinish: "2018/11/10 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/10/4 9:00",
//         Createfinish: "2018/10/11 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/10/12 9:00",
//         Votefinish: "2018/10/20 15:00"
//     },
//     Image: "public/images/noimage.png",
//     Order: ['2', '3', '6', '1', '5']
// });

// db.events.insert({
//     Eventid: "0",
//     Eventname: "イベント9",
//     Overview: "イベント9の説明です",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "南館1階F教室",
//     Holdperiod: {
//         Holdstart: "2016/12/1 9:00",
//         Holdfinish: "2016/12/1 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/12/1 9:00",
//         Createfinish: "2016/12/1 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/12/1 9:00",
//         Votefinish: "2016/12/1 15:00"
//     },
//     Image: "public/images/noimage.png",
//     Order: []
// });

// db.events.insert({
//     Eventid: "101",
//     Eventname: "イベントZ",
//     Overview: "イベントZno説明です",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "南館1階B教室",
//     Holdperiod: {
//         Holdstart: "2016/11/25 10:00",
//         Holdfinish: "2016/11/25 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/10/4 9:00",
//         Createfinish: "2016/10/11 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/10/12 9:00",
//         Votefinish: "2016/10/20 15:00"
//     },
//     Image: "public/images/noimage.png",
//     Order: []
// });
// db.events.insert({
//     Eventid: "102",
//     Eventname: "イベントP",
//     Overview: "イベントZno説明です",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "南館1階B教室",
//     Holdperiod: {
//         Holdstart: "2016/11/25 12:00",
//         Holdfinish: "2016/11/25 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/10/4 9:00",
//         Createfinish: "2016/10/11 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/10/12 9:00",
//         Votefinish: "2016/10/20 15:00"
//     },
//     Image: "public/images/noimage.png",
//     Order: []
// });
// db.events.insert({
//     Eventid: "2",
//     Eventname: "イベントB",
//     Overview: "イベントBの説明です",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "南館1階B教室",
//     Holdperiod: {
//         Holdstart: "2016/4/01 0:00",
//         Holdfinish: "2018/12/31 0:00"
//     },
//     Createperiod: {
//         Createstart: "2016/4/01 0:00",
//         Createfinish: "2018/12/31 0:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/4/01 0:00",
//         Votefinish: "2018/12/31 0:00"
//     },
//     Image: "public/images/noimage.png",
//     Order: ['2', '3', '6', '1', '5'],
//     Release_flg:true
// });
// db.events.insert({
//     Eventid: "3",
//     Eventname: "イベントC",
//     Overview: "イベントCの説明です",
//     Password: "password",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "game",
//     Venue: "ソニックホール",
//     Holdperiod: {
//         Holdstart: "2016/11/01 9:00",
//         Holdfinish: "2016/11/03 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/10/21 12:00",
//         Createfinish: "2016/10/31 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/11/1 12:00",
//         Votefinish: "2016/11/10 15:00"
//     },
//     Image: "public/images/goripic/fightgori.png",
//     Order: []
// });

// db.events.insert({
//     Eventid: "4",
//     Eventname: "Soft4合評会",
//     Overview: "SOft4合評会です。",
//     Address: "test@example.com",
//     Password: "password",
//     displayName: "test",
//     Fieldid: "it",
//     Venue: "ちか",
//     Holdperiod: {
//         Holdstart: "2016/12/1 9:00",
//         Holdfinish: "2016/12/3 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/12/21 12:00",
//         Createfinish: "2016/12/31 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/12/1 12:00",
//         Votefinish: "2016/12/10 15:00"
//     },
//     Image: "public/images/goripic/gori.png",
//     Order: []
// });
db.events.insert({
    Eventid: "5",
    Eventname: "2017デジタルワークス",
    Overview: "2017年度のデジタルワークスです。",
    Password: "",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "it",
    Venue: "ちか",
    Holdperiod: {
        Holdstart: "2017/12/11 9:00",
        Holdfinish: "2017/12/13 15:00"
    },
    Createperiod: {
        Createstart: "2017/12/21 12:00",
        Createfinish: "2017/12/31 15:00"
    },
    Voteperiod: {
        Votestart: "2017/12/1 12:00",
        Votefinish: "2017/12/10 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});
db.events.insert({
    Eventid: "6",
    Eventname: "2018デジタルワークス",
    Overview: "2018年度のデジタルワークスです。",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "it",
    Venue: "ちか",
    Holdperiod: {
        Holdstart: "2018/12/15 9:00",
        Holdfinish: "2018/12/17 15:00"
    },
    Createperiod: {
        Createstart: "2018/12/21 12:00",
        Createfinish: "2018/12/31 15:00"
    },
    Voteperiod: {
        Votestart: "2018/12/1 12:00",
        Votefinish: "2018/12/10 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});
db.events.insert({
    Eventid: "7",
    Eventname: "2019デジタルワークス",
    Overview: "2019年度のデジタルワークスです。",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "it",
    Venue: "ちか",
    Holdperiod: {
        Holdstart: "2019/12/16 9:00",
        Holdfinish: "2019/12/18 15:00"
    },
    Createperiod: {
        Createstart: "2019/12/21 12:00",
        Createfinish: "2019/12/31 15:00"
    },
    Voteperiod: {
        Votestart: "2019/12/1 12:00",
        Votefinish: "2019/12/10 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});

db.events.insert({
    Eventid: "8",
    Eventname: "2020デジタルワークス",
    Overview: "2020年度のデジタルワークスです。",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "it",
    Venue: "ちか",
    Holdperiod: {
        Holdstart: "2020/12/17 9:00",
        Holdfinish: "2020/12/19 15:00"
    },
    Createperiod: {
        Createstart: "2020/12/21 12:00",
        Createfinish: "2020/12/31 15:00"
    },
    Voteperiod: {
        Votestart: "2020/12/1 12:00",
        Votefinish: "2020/12/10 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});

db.events.insert({
    Password: "",
    Eventid: "10",
    Eventname: "文化祭",
    Overview: "文化祭のカラオケ募集",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "all",
    Venue: "本館地下１F",
    Holdperiod: {
        Holdstart: "2016/10/30 9:00",
        Holdfinish: "2016/11/1 15:00"
    },
    Createperiod: {
        Createstart: "2016/10/4 9:00",
        Createfinish: "2016/10/11 15:00"
    },
    Voteperiod: {
        Votestart: "2016/10/30 9:00",
        Votefinish: "2016/10/31 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});

// db.events.insert({
//     Eventid: "16",
//     Eventname: "クリスマス",
//     Overview: "クリぼっち募集",
//     Password: "",
//     Address: "test@example.com",
//     displayName: "test",
//     Fieldid: "all",
//     Venue: "本館地下10F",
//     Holdperiod: {
//         Holdstart: "2016/12/24 9:00",
//         Holdfinish: "2016/12/25 15:00"
//     },
//     Createperiod: {
//         Createstart: "2016/10/4 9:00",
//         Createfinish: "2016/10/11 15:00"
//     },
//     Voteperiod: {
//         Votestart: "2016/12/25 9:00",
//         Votefinish: "2016/12/25 15:00"
//     },
//     Image: "public/images/goripic/tameikigori.png",
//     Order: []
// });


db.events.insert({
    Eventid: "12",
    Eventname: "2016ゲーム分野１年合評会",
    Overview: "2016ゲーム分野１年合評会です。",
    Password: "1111",
    Address: "test@example.com",
    displayName: "test",
    Fieldid: "game",
    Venue: "本館地下0F",
    Holdperiod: {
        Holdstart: "2016/12/25 9:00",
        Holdfinish: "2016/12/26 15:00"
    },
    Createperiod: {
        Createstart: "2016/10/4 9:00",
        Createfinish: "2016/10/11 15:00"
    },
    Voteperiod: {
        Votestart: "2016/12/25 9:00",
        Votefinish: "2016/12/25 15:00"
    },
    Image: "public/images/noimage.png",
    Order: []
});

db.events.insert({
    Eventid:"13",
    Eventname:"2016グラフィック分野１年合評会",
    Overview:"2016グラフィック分野１年合評会です。",
    Password:"",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"graphic",
    Venue:"本館地下0F",
    Holdperiod:{
        Holdstart :"2017/1/25 9:00",
        Holdfinish : "2017/1/27 15:00"
    },
    Createperiod:{
        Createstart:"2016/1/4 9:00",
        Createfinish:"2016/1/11 15:00"
    },
    Voteperiod:{
        Votestart:"2016/1/25 9:00",
        Votefinish:"2016/1/25 15:00"
    },
    Image:"public/images/noimage.png",
    Order: []
});
db.events.insert({
    Eventid:"14",
    Eventname:"ソフトⅣコース中間発表",
    Overview:"12/14日　南館1階B教室で行う中間発表です。",
    Password:"",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"南館1階B教室",
    Holdperiod:{
        Holdstart :"2016/12/14 9:00",
        Holdfinish : "2017/12/14 12:00"
    },
    Createperiod:{
        Createstart:"2017/9/10 12:00",
        Createfinish:"2017/12/10 15:00"
    },
    Voteperiod:{
        Votestart:"2017/12/14 9:00",
        Votefinish:"2017/12/14 15:00"
    },
    Image:"public/images/noimage.png",
    Order: []
});

db.events.insert({
    Eventid:"15",
    Eventname:"平成27年度デジタルワークス",
    Overview:"中間発表用テストデータ 去年のデジタルワークス",
    Password:"",
    Address:"test@example.com",
    displayName:"test",
    Fieldid:"it",
    Venue:"神戸産業振興センター",
    Holdperiod:{
        Holdstart :"2016/2/14 9:00",
        Holdfinish : "2017/2/14 17:00"
    },
    Createperiod:{
        Createstart:"2016/9/10 12:00",
        Createfinish:"2016/12/10 15:00"
    },
    Voteperiod:{
        Votestart:"2016/12/10 9:00",
        Votefinish:"2017/2/15 15:00"
    },
    Image:"public/images/noimage.png",
    Order: ['20','21','22','23','24','25','26','27','28'],
    Release_flag:false
});

// db.events.insert({
//     Eventid:"17",
//     Eventname:"ソフトⅣコース 合評会 アナログver",
//     Overview:"2/2に行われるソフトⅣコースの合評会 現状の紙媒体での動作",
//     Password:"",
//     Address:"test@example.com",
//     displayName:"岡先生",
//     Fieldid:"it",
//     Venue:"ソニックホール",
//     Holdperiod:{
//         Holdstart :"2017/2/2 9:00",
//         Holdfinish : "2017/2/2 16:00"
//     },
//     Createperiod:{
//         Createstart:"2016/9/10 12:00",
//         Createfinish:"2016/10/10 15:00"
//     },
//     Voteperiod:{
//         Votestart:"2016/2/2 9:00",
//         Votefinish:"2017/2/3 15:00"
//     },
//     Image:"public/images/noimage.png",
//     Order: ['29','30','31','32','33'],
//     Release_flag:true
// });
db.events.insert({
    Eventid:"18",
    Eventname:"ソフトⅣコース 合評会",
    Overview:"2/2に行われるソフトⅣコースの合評会",
    Password:"",
    Address:"test@example.com",
    displayName:"岡先生",
    Fieldid:"it",
    Venue:"ソニックホール",
    Holdperiod:{
        Holdstart :"2017/2/2 9:00",
        Holdfinish : "2017/2/2 16:00"
    },
    Createperiod:{
        Createstart:"2016/9/10 12:00",
        Createfinish:"2016/10/10 15:00"
    },
    Voteperiod:{
        Votestart:"2016/2/2 9:00",
        Votefinish:"2017/2/3 15:00"
    },
    Image:"public/images/noimage.png",
    Order: ['34','35','36','37','38'],
    Release_flag:true
});
