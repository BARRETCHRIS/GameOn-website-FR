// START NAVIGATION
// Responsive nav formatting
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// END NAVIGATION

// START OPEN MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// END OPEN MODAL

// START CLOSE MODAL
// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal(){
  modalbg.style.display = "none";
  location.reload();
}
// END CLOSE MODAL









