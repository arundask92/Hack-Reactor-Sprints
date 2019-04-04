//connect to db
var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "grocery_list"
});

// function that gets all grocires from table
const getAllGroceries = whenGroceries => {
  var qStr = "SELECT * FROM groceries";
  con.query(qStr, (err, results, fields) => {
    if (err) {
      whenGroceries(err, null);
    }
    whenGroceries(null, results);
  });
};

//function that inserts groceries to table
const addOneGrocery = (item, whenAdded) => {
  // (?, ?); , [item.name, item.quantity]
  var qStr =
    "INSERT INTO groceries (name, quantity) VALUES (?, ?), [item.name, item.quantity]";
  con.query(qStr, (err, results, fields) => {
    if (err) {
      whenAdded(err);
    }
    whenAdded(null);
  });
};

module.exports = {
  getAllGroceries,
  addOneGrocery
};
