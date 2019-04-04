const express = require("express");
const bodyParser = require("body-parser");
const findRsvpAndUpdate = require("../database/controllers/rsvp.js");
const app = express();
const PORT = 3000;
require("../database/index.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.post("/rsvps", (req, res) => {
  findRsvpAndUpdate(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
