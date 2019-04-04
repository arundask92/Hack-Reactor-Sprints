const Rsvp = require("../models/rsvp.js");

const findRsvpAndUpdate = (data, cb) => {
  console.log(data);
  Rsvp.findOneAndUpdate({ email: data.email }, data, (err, results) => {
    if (err) {
      console.log("found");
      Rsvp.create(data, err => {
        if (err) return console.log(err);
        console.log("saved");
      });
    }
    cb(null, results);
  });
};

module.exports = findRsvpAndUpdate;
