var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var qStr = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM message LEFT OUTER JOIN users on (messages.userid = users.id) ORDER BY messages.id DESC';
      db.query(qStr, function(err, result) {
        if (err) { console.log('ERROR') };
        callback(err, result);
      })
    }, 

    post: function (message, callback) {
      var qSTR = 'INSERT FROM messages()';
    } 

    
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  users: {
    // Ditto as above.
    get: function (callback) {

    },
    post: function (user, callback) {
      var post = {username: user};
      db.query('INSERT INTO users SET ?', post, function(err, result) {
        if (err) {
          console.log(err);
        } 
          console.log(result);
      }) 
    }
  }
};

