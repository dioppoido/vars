//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.votes.drop();
db.createCollection("votes");
db.votes.insert({
    Voteid:"1",
    Eventid:"1",
    Votename:"システム"
});
db.votes.insert({
    Voteid:"2",
    Eventid:"1",
    Votename:"プレゼン"
});
db.votes.insert({
    Voteid:"3",
    Eventid:"1",
    Votename:"デザイン"
});
db.votes.insert({
    Voteid:"4",
    Eventid:"1",
    Votename:"総合"
});

