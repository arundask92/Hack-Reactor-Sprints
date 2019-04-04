const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const axios = require("axios");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static("./public"));
app.get("/api", (req, res) => {
  axios
    .get(
      " https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-07-17&end=2018-09-01"
    )
    .then(response => res.json(response.data.bpi))
    .catch(err => console.log(err));
});

app.listen(PORT, err =>
  console.log(err || `App is listening on port # ${PORT}`)
);
module.exports = app;
