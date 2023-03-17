// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




  // get the feedback div element so we can do something with it.
  const feedbackElement = document.getElementById('feedback');
  // get the form so we can read what was entered in it.
  const formElement = document.forms[0];
  // add a 'listener' to wait for a submission of our form. When that happens run the code below.
  formElement.addEventListener('submit', function(e) {
      // stop the form from doing the default action.
      e.preventDefault();
      // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
      feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
      // make the feedback element visible.
      feedbackElement.style.display = "block";
      // add a class to move everything down so our message doesn't cover it.
      document.body.classList.toggle('moveDown');
  });

  


