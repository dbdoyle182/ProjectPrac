$(document).ready(function() {
    console.log("Signup js")
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        name: $("#name-input").val().trim(),  
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        phone: $("#phoneNumber-input").val().trim()
      };
  
      if (!userData.email || !userData.password || !userData.phone || !userData.name) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData);
      emailInput.val("");
      passwordInput.val("");
      $("#name-input").val("");
      $("#phoneNumber-input").val("")
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(user) {
      $.post("/api/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone
        
      }).then(function(data) {
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  