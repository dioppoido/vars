
//noinspection JSAnnotator
db = db.getSiblingDB("vars");
db.aggregates.drop();
db.createCollection("teamcreates");

db.teamcreates.insert({
  Teamname    :"test",
  Teamid      :"123",
  Eventid     :"ihtwjhp",
  Systemname  :"sams",
  Overview    :"ghrguarijmal",
  displayName :"doi",
  Address     :"kd1147686@st.kobedenshi.ac.jp",
  Image       :"null"
});
