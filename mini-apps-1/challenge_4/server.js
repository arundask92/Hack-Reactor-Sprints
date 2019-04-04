const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
