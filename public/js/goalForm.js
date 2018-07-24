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
    if (newGoal === "" || goalDate === "") {
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
})

});








// updateGoalModel({
    //     goal: newGoal,
    //     goalDate: goalDate,



// function alarmSet() {

//     var hr = document.getElementById('alarmhrs');

//     var min = document.getElementById('alarmmins');

//     var ap = document.getElementById('ampm');


//     var selectedHour = hr.options[hr.selectedIndex].value;
//     var selectedMin = min.options[min.selectedIndex].value;
//     var selectedAP = ap.options[ap.selectedIndex].value;

//     var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + selectedAP;
//     console.log('alarmTime: ' + alarmTime);

//     document.getElementById('alarmhrs').disabled = true;
//     document.getElementById('alarmmins').disabled = true;
//     document.getElementById('ampm').disabled = true;


//     //when alarmtime is equal to currenttime then play a sound
//     var h2 = document.getElementById('clock');

//     /*function to calcutate the current time 
//     then compare it to the alarmtime and play a sound when they are equal
//     */

//     setInterval(function () {

//         var date = new Date();

//         var hours = (12 - (date.getHours()));
//         // var hours = date.getHours();

//         var minutes = date.getMinutes();

//         var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//         //convert military time to standard time

//         if (hours < 0) {
//             hours = hours * -1;
//         } else if (hours == 00) {
//             hours = 12;
//         } else {
//             hours = hours;
//         }

//         var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + "" + ampm;


//         if (alarmTime == currentTime) {
//             textUser();
//         }

//     }, 1000);


//     // console.log('currentTime:' + currentTime);	

// }


// function alarmClear() {

//     document.getElementById('alarmhrs').disabled = false;
//     document.getElementById('alarmmins').disabled = false;
//     document.getElementById('ampm').disabled = false;
//     sound.pause();
// }
