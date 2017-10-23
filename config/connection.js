var mysql = require("mysql");

// mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my456123",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;