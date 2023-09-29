// Submit modal function
form.addEventListener("submit", (event) => {
    //stop default submit action
    event.preventDefault();
    console.log(event.preventDefault);

    let firstVal = first.value;
    let lastVal = last.value;
    let emailVal = email.value;
    let birthdateVal = birthDate.value;
    let quantityVal = quantity.value;
    let verifControl = true;

    //Check input value for first name
    if(firstVal.match(regOnlyTxt)){ 
        console.log("GOOD JOB");
        firstControl = true;
    }else{
        console.log("BAD JOB");
        showError(first); 
        firstControl = false;    
    }

    //Check input value for last name
    if(lastVal.match(regOnlyTxt)){ 
        console.log("GOOD JOB");
        lastControl = true;
    }else{
        console.log("BAD JOB");
        showError(last);
        lastControl = false;
    }

    //Check input value for email
    if(emailVal.match(regEmail)){ 
        console.log("GOOD JOB");
        emailControl = true;
    }else{
        console.log("BAD JOB");
        showError(email);
        emailControl = false;
    }
   
    
    if (birthdate.value === "") {
        showError(birthDate);
        verifControl = false;
    }
    
    if (quantity.value === "") {
        showError(quantity);
        verifControl = false;
    }
    
    let radioChecked = false;
    listBtnRadio.forEach(radio => {
        if (radio.checked) {
            radioChecked = true;
        }
    });
    if (!radioChecked) {
        verifControl = false;
    }
    
    if (!document.getElementById('checkbox1').checked) {
        verifControl = false;
    }
    
    if (verifControl) {
        console.log("Toutes les vérifications sont passées, soumettre le formulaire...");
        form.submit();
    } else {
        console.log("Il y a des erreurs dans le formulaire, ne pas soumettre.");
    }
});    


//creat element error
//function creatErrorElemt(){
    function showError(element) {
        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = msgError;
        element.classList.add("txt-control-error");
        const formDataElement = element.parentElement;
        formDataElement.appendChild(msgWrapError);
      }
      

//creat and show thanks booking message
function thanksBooking(){
    //Creat element for thanks message
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks")
    msgWrapThanks.textContent = sendMsg;
    //Start function remove content elements form
    formData.forEach(e => e.remove());
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);
    //change text form submit button
    formBtnSubmit.textContent = "Fermer"
    //Restart default submit action and reset form
    //NB!! à corriger 
    form.addEventListener("submit", (event) => {
        closeModal();
        //Reflech page
        location.reload();
        //Reset form
        //const formElement = document.getElementById('reservationForm');
        //formElement.reset();
    });
}

