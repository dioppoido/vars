
//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.aggregates.drop();
db.createCollection("aggregates");
