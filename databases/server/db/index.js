var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "student",
    database: "chat",
    password: "student"
  });
  
//   con.connect(function(err) {
//     if (err) {
//         console.log('DB connection failed!');
//     } else {
//         console.log("DB Connected!");
//     }
//   });
con.connect();
module.exports = con;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


