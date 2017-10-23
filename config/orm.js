var connection = require("./connection.js");

// selectAll()

// insertOne()

// updateOne()

var orm = {
	// display all
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(vals, cb) {
  	// console.log("vals is: ", vals);
    var queryString = "INSERT INTO burgers (burger_name) values (" + "'" +vals+ "'" +");";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(val, cb) {
    var queryString = "UPDATE burgers set devoured = '1' where id = " + val;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

module.exports = orm;