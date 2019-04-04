const Attendee = require("../../db/models/Attendee");

exports.getAll = (req, res) => {
  Attendee.find({}, (err, data) => {
    if (err) return console.log(err);
    res.send(data);
  });
};

exports.add = (req, res) => {
  Attendee.create(req.body, err => {
    if (err) return console.log(err);
    console.log("saved");
  });
};

// exports.destroy = (req, res) => {
//   console.log(req.body);
//   // Attendee.findByIdAndRemove(req.params.)
// };
