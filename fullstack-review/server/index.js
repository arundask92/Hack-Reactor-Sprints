const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const getGitHubUser = require("../helpers/github.js");
const { save, find25 } = require("../database/index");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  console.log(req.body);
  // This route should take the github username provided
  let username = req.body.username;
  getGitHubUser.getReposByUsername(username, (err, data) => {
    if (err) console.log(err);
    save(data);
  });
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  find25((err, repos) => {
    if (err) return console.log(err);
    res.send(repos);
  });
  // This route should send back the top 25 repos
  // console.log(req);
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
