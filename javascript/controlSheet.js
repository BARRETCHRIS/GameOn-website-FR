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
    try {
        if (tag.value === "") {
            throw new Error(msgError.inputEmpty);
        }
        generateErrorMessage(tag, null);
        emptyCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        emptyCheck = false;
    }
    return emptyCheck;
}

function checkText(tag){
    let textCheck = "";
    try {
        if (!tag.value.match(regOnlyTxt)) {
            throw new Error(msgError.textOnly);
        }
        generateErrorMessage(tag, null);
        textCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        textCheck = false;
    }
    return textCheck;
}

function checkEmail(tag){
    let emailCheck = "";
    try {
        if (!tag.value.match(regEmail)) {
            throw new Error(msgError.email);
        }
        generateErrorMessage(tag, null);
        emailCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        emailCheck = false;
    }
    return emailCheck;
}

function checkDate(tag){
    let dateCheck = "";
    try {
        const today = new Date();
        const selectedDate = new Date(tag.value);
        if (selectedDate > today) {
            throw new Error(msgError.dateOver);
        }
        generateErrorMessage(tag, null);
        dateCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        dateCheck = false;
    }
    return dateCheck;
}

function checkRadio(tag){
    let radioCheck = "";
    try {
        let radioChecked = false;
        cityList.forEach((radio) => {
            if (radio.checked) {
                radioChecked = true;
            }
        });
        if (!radioChecked) {
            throw new Error(msgError.contestCity);
        }
        generateErrorMessage(tag, null);
        radioCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        radioCheck = false;
    }
    return radioCheck;
}

function checkCheckbox(tag){
    let checkboxCheck = "";
    try {
        if (!tag.checked) {
            throw new Error(msgError.cgu);
        }
        generateErrorMessage(tag, null);
        checkboxCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
        checkboxCheck = false;
    }
    return checkboxCheck;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

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

    if (emptyCheck && textCheck && emailCheck && dateCheck && radioCheck && checkboxCheck) {
        console.log("Tous les champs sont valides. Envoi du formulaire...");
        thanksBooking();
    } else {
        console.log("Il y a des erreurs dans le formulaire. Veuillez corriger les champs.");
    }
});
