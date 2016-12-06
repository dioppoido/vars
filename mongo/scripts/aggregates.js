
//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.aggregates.drop();
db.createCollection("aggregates");

db.aggregates.insert({
    Aggregateid    : "1",
    Eventid         : "1",
    Voteid          : "1",
    Address          : "kd",
    Teamid          : "1"
});

db.aggregates.insert({
    Aggregateid    : "2",
    Eventid         : "1",
    Voteid          : "2",
    Address          : "kd2",
    Teamid          : "2"
});

db.aggregates.insert({
    Aggregateid    : "3",
    Eventid         : "1",
    Voteid          : "3",
    Address          : "kd3",
    Teamid          : "3"
});

db.aggregates.insert({
    Aggregateid    : "4",
    Eventid         : "1",
    Voteid          : "4",
    Address          : "kd4",
    Teamid          : "4"
});

db.aggregates.insert({
    Aggregateid    : "5",
    Eventid         : "1",
    Voteid          : "1",
    Address          : "kd5",
    Teamid          : "2"
});
db.aggregates.insert({
    Aggregateid    : "6",
    Eventid         : "1",
    Voteid          : "1",
    Address          : "kd5",
    Teamid          : "6"
});
