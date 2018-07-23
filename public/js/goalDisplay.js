$(document).ready(function () {

    $.get("/api/goalDisplay", /*user,*/ function (data) {

// we need to loop through the data response and display the goal and goaldate; next to each goal we can add update/delete and complete buttons
// onclick if the value of complete = true then make a change to database with a route put/update

    console.log(data)
    })

})
