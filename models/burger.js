var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },



  update: function(val, cb) {
    orm.updateOne(val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;