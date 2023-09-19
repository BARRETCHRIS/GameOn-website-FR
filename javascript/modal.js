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
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// END NAVIGATION


// START CLOSE MODAL
// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal(){
  modalbg.style.display = "none";
}
// END CLOSE MODAL









