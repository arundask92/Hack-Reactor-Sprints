const User = require("../models/user");

module.exports = {
  fetch: (req, res) => {},
  create: (req, res) => {
    console.log(req.body);
    User.create(req.body, (err, data) => {
      if (err) return console.log(err);
      console.log("saved ", data);
      res.send(data);
    });
  },
  update: (req, res) => {},
  destroy: (req, res) => {}
};
