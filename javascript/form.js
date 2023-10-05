function generateErrorMessage(tag, errorMessage) {
    let msgWrapError = tag.parentNode.querySelector(".error-msg");

    if (errorMessage) {
        tag.style.border = "#fe142f 2px solid";
        if (!msgWrapError) {
            msgWrapError = document.createElement("div");
            msgWrapError.classList.add("error-msg");
            msgWrapError.textContent = errorMessage;
            tag.parentNode.appendChild(msgWrapError);
        }
    } else {
        tag.style.border = "none";
        if (msgWrapError) {
            msgWrapError.remove();
        }
    }
}

function checkEmptyInput(tag){
    let emptyCheck = "";
    let errorMessage = tag.value === "" ? msgError.inputEmpty : null;
    generateErrorMessage(tag, errorMessage);
    emptyCheck = errorMessage ? false : true;
    return emptyCheck;
}

function checkText(tag){
    let textCheck = "";
    let errorMessage = tag.value.match(regOnlyTxt) ? null : msgError.textOnly;
    generateErrorMessage(tag, errorMessage);
    textCheck = errorMessage ? false : true;
    return textCheck;
}

function checkEmail(tag){
    let emailCheck = "";
    let errorMessage = tag.value.match(regEmail) ? null : msgError.email;
    generateErrorMessage(tag, errorMessage);
    emailCheck = errorMessage ? false : true;
    return emailCheck;
}

function checkDate(tag){
    let dateCheck = "";
    let errorMessage = "";
    const today = new Date();
    const selectedDate = new Date(tag.value);

    if (selectedDate > today) {
        errorMessage = msgError.dateOver;
    }

    generateErrorMessage(tag, errorMessage);

    dateCheck = errorMessage ? false : true;
    return dateCheck;

}

function checkRadio(tag){
    let radioCheck = "";
    let errorMessage = "";

    let radioChecked = false;
    cityList.forEach((radio) => {
        if (radio.checked) {
            radioChecked = true;
        }
    });

    errorMessage = radioChecked ? null : msgError.contestCity;
    generateErrorMessage(tag, errorMessage);

    radioCheck = errorMessage ? false : true;
    return radioCheck;
}

function checkCheckbox(tag){
    let checkboxCheck = "";
    let errorMessage = tag.checked ? null : msgError.cgu;
    generateErrorMessage(tag, errorMessage);

    checkboxCheck = errorMessage ? false : true;
    return checkboxCheck;
}

// Submit modal function
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    let emptyCheck = true, textCheck = true, emailCheck = true, dateCheck = true, radioCheck = true, checkboxCheck = true;

    for (let val = 0; val < 5; val++) {
        let currentVal = formDataInput[val];
        emptyCheck = checkEmptyInput(currentVal) && emptyCheck;   
    }

    for (let txt = 0; txt < 2; txt++) {
        let currentTxt = formDataInput[txt];
        textCheck = checkText(currentTxt) && textCheck;   
    }

    emailCheck = checkEmail(email);
    dateCheck = checkDate(birthDate);
    radioCheck = checkRadio(cityList[0]); 
    checkboxCheck = checkCheckbox(cgu);

    // Vérifier toutes les conditions
    if (emptyCheck && textCheck && emailCheck && dateCheck && radioCheck && checkboxCheck) {
        console.log("Tous les champs sont valides. Envoi du formulaire...");
        thanksBooking();
    } else {
        console.log("Il y a des erreurs dans le formulaire. Veuillez corriger les champs.");
    }
});



//creat and show thanks booking message
function thanksBooking(){
    //Creat element for thanks message
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks");
    msgWrapThanks.innerHTML = sendMsg;

    //Reset form
    const formElement = document.getElementById('reservationForm');
    formElement.reset();

    //Start function remove content elements form
    formData.forEach(e => e.remove());
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);
    //change text form submit button
    formBtnSubmit.textContent = "Fermer";

    //Change default submit action and reset form
    
    form.addEventListener("submit", (event) => {
        closeModal();
        //Reflech page
        location.reload();    
    });
    
}

