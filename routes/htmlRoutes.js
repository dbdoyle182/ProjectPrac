var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.render(index.handlebars);
  });

  app.get("/register", function(req, res) {
    res.render(register.handlebars);
  });

  app.get("/user/:id", function(req, res) {
    db.User_input.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true }]
    }).then(function(user) {
      res.render("user", {
        user: user,
        goals: user.Goal
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
}
