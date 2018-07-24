$(document).ready(function () {

    console.log(window.location);

    var UserId = window.location.pathname.split("/")[2];

    console.log(UserId);

    $.get("/api/goalDisplay/" + UserId, function (data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) {

            if(!data[i].completed){
                var btn = $("<button>");
            btn.text("Delete");
            btn.attr({
                "class": "delete",
                "data-id": data[i].id
            })

            var updateBtn = $("<button>");
            updateBtn.text("Update");
            updateBtn.attr({
                "class": "update",
                "data-id": data[i].id
            })

            var completedBtn = $("<button>");
            completedBtn.attr({
                "class": "completed",
                "data-id": data[i].id,
                "data-goal": data[i].goal,
                "data-date": data[i].goalData,
                "data-user": data[i].UserId
            })
            var refinedDate = goalData.split("T")
            completedBtn.text("Completed");
          
            console.log(refinedDate[0]);
         $("#goalInfo").append("<br> Goal: " + data[i].goal);
         $("#goalInfo").append("<br> Date: " + refinedDate[0]);
         $("#goalInfo").append(updateBtn);
         $("#goalInfo").append(btn);
        // $("#goalsInfo").append(`<button class='delete' data-id='${data[i].id}'>Delete</button>`);
         $("#goalInfo").append(completedBtn)
            }else{
                var completedDiv = $("<h3>")
                completedDiv.text(data[i].goal);

                $("#completed").append(completedDiv);
            }
            
        }

        $(document).on("click", ".delete", function(){
            $.ajax({
                method: "DELETE",
                url: "/api/delete/" + $(this).data("id")
              })
                .then(function(){

                    console.log("this part of the function is being run")
                    
                   location.assign(window.location.href);
                });

                location.assign(window.location.href);
            
        })

        $(document).on("click", ".update", function(){
            console.log("put together an update form and use/leverage req.params.id to keep track of which goal in database is being updated")
        })

        $(document).on("click", ".completed", function(){
            var newGoal = {
                id: $(this).data("id"),
                goal: $(this).data("goal"),
                goalData: $(this).data("date"),
                completed: true,
                UserId: $(this).data("user")
            }


            $.ajax({
                method: "PUT",
                url: "/api/completed/" + $(this).data("id"),
                data: newGoal
              }).then(function(){
                location.assign(window.location.href);
              })

              location.assign(window.location.href);
        })

        

    }); 
    $(document).on("click", "#addGoals", function(){
        console.log(UserId)
        location.assign("/goalForm/" + UserId)
    })

    $(document).on("click", "#goalDisplay", function(){
        location.assign("/goalDisplay/" + UserId);
    })
})
