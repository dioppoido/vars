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
//以下中間発表用
db.votes.insert({
    Voteid:"5",
    Eventid:"15",
    Votename:"１年生 C言語Ⅲ"
});
db.votes.insert({
    Voteid:"6",
    Eventid:"15",
    Votename:"２年生 Java"
});
db.votes.insert({
    Voteid:"7",
    Eventid:"15",
    Votename:"３年生 科目合同"
});
db.votes.insert({
    Voteid:"8",
    Eventid:"15",
    Votename:"総合"
});
