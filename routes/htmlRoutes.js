// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/goalDisplay", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/goalDisplay.html"));
  });

  app.get("/goalForm", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/goalForm.html"));
  });

  // test route

  app.get("/test", isAuthenticated, function (req, res) {
    // res.send("the goal info will show up here!");
    res.redirect("/calendar/:" + req.user.id);
  })

  app.get("/calendar/:id", function (req, res) {
    res.send("This is your user id: " + req.user.id + " . We can post the data for this goal on this page!");
  })
};