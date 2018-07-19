var db = require("../models");

module.exports = function(app) {
  // Get all goals of one user
  app.get("/api/user_info/:id", function(req, res) {
    db.User_input.findOne({
      where: {
        id: req.params.id
      },
      include: [{ all: true }]
    }).then(function(userGoals) {
      res.json(userGoals);
    });
  });

  // Create a new goal
  app.post("/api/goals", function(req, res) {
    db.Goals.create({
      goal: req.user.goal,
      remindTime: req.body.remindTime,
      progressCheck: req.body.progressCheck,
      completed: req.body.completed
    }).then(function(newGoal) {
      res.json(newGoal);
    });
  });

  // Delete a goal by id
  app.delete("/api/user_info/:id", function(req, res) {
    db.Goal.destroy({ where: { id: req.params.id } }).then(function(
      deleteGoal
    ) {
      res.json(deleteGoal);
    });
  });
};

// Updating a goal by id
