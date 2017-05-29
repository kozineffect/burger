// ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {

  // Gets all burgers in database to render to page.
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  // Inserts a new burger to eat in the database.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  // Updates the burger from not being devoured to being devoured.
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;