//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.fields.drop();
db.createCollection("fields");

//すべて
db.fields.insert({
    Fieldid: "all",
    Fieldname: "全分野"
});

//IT分野
db.fields.insert({
    Fieldid: "it",
    Fieldname: "IT分野"
});

//ハード分野
db.fields.insert({
    Fieldid: "hard",
    Fieldname: "ハード分野"
});

//ビジネス分野
db.fields.insert({
    Fieldid: "business",
    Fieldname: "ビジネス分野"
});

//ゲームソフト分野
db.fields.insert({
    Fieldid: "game",
    Fieldname: "ゲームソフト分野"
});

//グラフィックス分野
db.fields.insert({
    Fieldid: "graphic",
    Fieldname: "グラフィックス分野"
});

//サウンド分野
db.fields.insert({
    Fieldid: "sound",
    Fieldname: "サウンド分野"
});

//CAD分野
db.fields.insert({
    Fieldid: "cad",
    Fieldname: "CAD分野"
});
