// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
<<<<<<< HEAD

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
=======
  // Load index page

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/register", function(req, res) {
    res.render("register");
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
>>>>>>> d778e25c058f0b34782662745d83efcc2f06954f
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
<<<<<<< HEAD

};
=======
}
>>>>>>> d778e25c058f0b34782662745d83efcc2f06954f
