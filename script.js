/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
window.onload = function() {
  relative.style.removeProperty('position');
}
window.onscroll = function() {
  myFunction();
};

var topNav = document.getElementById("topNav");
var sticky = topNav.offsetTop;
var relative = document.getElementById("viz1614523738719");

// relative.style.setProperty('position', 'static');
// element.style.setProperty('color', 'initial')



function myFunction() {
  if (window.pageYOffset >= sticky) {
    topNav.classList.add("sticky");
  } else {
    topNav.classList.remove("sticky");
  }
  relative.style.removeProperty('position');

}

// function removePositionRelative() {
//   relative.style.removeProperty('position');

// }

function alerts() {
  alert(
    "Your response have been submitted." + "Thank you for submitting the form!"
  );
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
