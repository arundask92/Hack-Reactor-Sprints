const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("./public"));
app.use(logger("dev"));
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

module.exports = app;
