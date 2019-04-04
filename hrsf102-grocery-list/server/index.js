const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const controllers1 = require('../database');
const controllers = require("../database/index.js");

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

// to fix cross origin errors
app.use(express.static(__dirname + "/../client/dist"));

app.get("/groceries", (req, res) => {
  controllers.getAllGroceries((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/groceries", bodyParser.json(), (req, res) => {
  controllers.addOneGrocery(req.body, err => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
