$(document).ready(function() {

    












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
