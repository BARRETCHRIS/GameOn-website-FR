
// Submit modal function
//form.addEventListener("submit", (event) => {
    // stop default action
  //  event.preventDefault();
    //console.log(event);
//});

// Content form - remove elements
//function removeFormData() {
  //  formData.forEach(e => e.remove());
    //console.log(form);    
//}

//function validate(){
    

  //  if(first.value.match(regOnlyTxt)){
        //Creat msg-thanks elements
    //    const msgWrapThanks = document.createElement ("p");
      //  msgWrapThanks.classList.add("msg-thanks")
        //msgWrapThanks.textContent = sendMsg;
        //Start function remove content elements form
        //removeFormData();
        //Insert msg-thanks element
        //form.prepend(msgWrapThanks);
        // Reload submit default action
        //console.log("GOOD JOB");
    //}else{
      //  console.log("BAD JOB");
    //}

//}

// Submit modal function
form.addEventListener("submit", (event) => {
    //stop default action
    event.preventDefault();

    let firstVal = first.value;
    let lastVal = last.value;
    let emailVal = email.value;
    let birthdateVal = birthDate.value;
    let quantityVal = quantity.value;

    console.log(firstVal);
    console.log(lastVal);
    console.log(emailVal);
    console.log(birthdateVal);
    console.log(quantityVal);

    

    if(firstVal.match(regOnlyTxt)){ 
        console.log("GOOD JOB");
        thanksBooking();
    }else{
        console.log("BAD JOB");
    }
    
});

function thanksBooking(){
    console.log(form);
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks")
    msgWrapThanks.textContent = sendMsg;
    //Start function remove content elements form
    formData.forEach(e => e.remove());
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);
    formBtnSubmit.textContent = "Fermer"
}


console.log(formBtnSubmit.textContent);