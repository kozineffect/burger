var express = require("express");

var router = express.Router();

// Imports the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Get function to render all burger data in the burgers_db.
router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post function to insert a new burger into burgers_db.
router.post("/", function (req, res) {
  burgers.insertOne([
    "burger_name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function () {
    res.redirect("/");
  });
});

// Updates specified burger in the burgers_db to show they have been devoured.
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
    devour: true
  }, condition, function () {
    res.redirect("/");
  });
});

// Exports routes for server.js to use.
module.exports = router;