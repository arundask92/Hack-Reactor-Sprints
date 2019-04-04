const express = require("express");
const DATA_MEDICARE_GOV_APP_TOKEN = require("../config.js");
const app = express();
const PORT = 3000;
var request = require("request");
const axios = require("axios");
app.use(express.static(__dirname + "/../client/dist"));

// ----------------------------------------------------
// TODO: Fill in the request handler for this endpoint!
// ----------------------------------------------------
app.get("/api/heartFailures", (req, res) => {
  // ----------------------------------------------------
  // TODO: Fill in the request handler for this endpoint!
  // ----------------------------------------------------
  axios
    .get("https://data.medicare.gov/resource/ukfj-tt6v.json", {
      params: { $limit: 5000 },
      token: DATA_MEDICARE_GOV_APP_TOKEN
    })
    .then(response => console.log(response));
  // .then(response => response.forEach(st => console.log(st)));
  // -----------------------------------------------------
  // TODO: Send a request to the HospitalCompare API here!
  // -----------------------------------------------------

  // -----------------------------------------------------
  // TODO: Do all data processing/wrangling/munging here!
  // -----------------------------------------------------
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
