$(document).ready(function () {
    console.log("This loaded properly!")
      
      console.log(window.location);
    
      var UserId = window.location.pathname.split("/")[2];
      console.log(UserId);
    
    //   console.log("userID in array format: ", userId);
    
      $("#submit_btn").on("click", function() {
        var newGoal = $("#newGoal").val().trim();
        var goalDate = $("#goalDate").val().trim()
        // var UserId = 1
      
          console.log("CLICK")
          console.log("New Goal: ", newGoal)
          console.log("Goal Date: ", goalDate)
        event.preventDefault();
        // Don't do anything if the input fields are empty
        if ( newGoal === "" || goalDate === "") {
          return alert("Please fill out the form completely.");
            } else {
                var goal = {
                    goal: newGoal,
                    goalDate: goalDate,
                    UserId: UserId
    
                }
                console.log(goal)
                $.post("/api/goalForm/" + UserId , goal, function (data) {
                    $("#newGoal").val("")
                    $("#goalDate").val("")
                    alert("Successfully added new Goal!")
                })
            }
        })
    
        
    $(document).on("click", "#goalDisplay", function(){
        location.assign("/goalDisplay/" + UserId);
    });

    $(document).on("click", "#addGoals", function(){
        console.log(UserId)
        location.assign("/goalForm/" + UserId)
    });
    $(document).on("click", "#home", function(){
        location.assign("/members");
    })
    
    });
    
    