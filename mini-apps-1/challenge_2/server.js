const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

var dataArray = [];
app.post("/data", (req, res) => {
  console.log(req.body);
  var data = req.body;
  var dataToArray = data => {
    var parseData = elem => {
      var elemToAdd = {};
      for (var key in elem) {
        if (key !== "children") {
          elemToAdd[key] = elem[key];
        }
      }
      dataArray.push(elemToAdd);
      for (var i = 0; i < elem["children"].length; i++) {
        parseData(elem["children"][i]);
      }
    };
    parseData(data);
  };
  dataToArray(data);
  console.log(dataArray);
  res.sendStatus(200);
});

app.get("/data", (req, res) => {
  console.log("hello", dataArray);
  var str = "";
  for (var i = 0; i < dataArray.length; i++) {
    var babyStr = "";
    for (var key in dataArray[i]) {
      babyStr += dataArray[i][key] + ",";
    }
    str += babyStr.slice(0, -1) + "\n";
  }
  console.log(str);
  res.send(str);
});
