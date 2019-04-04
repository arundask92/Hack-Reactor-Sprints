// require modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;
const routes = require("./routes/user.js");
require("./config/database");

// create the express app
const app = express();
// mount middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/user", routes);
// tell app to listen on port #
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
