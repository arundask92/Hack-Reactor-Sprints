var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      var message = req.body;
      models.messages.post(message, function(err, message) {
        
     
      })

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var user = req.body;
      models.users.post(user, function(err, user) {
        res.send(user);
      })
    }
  }
};

