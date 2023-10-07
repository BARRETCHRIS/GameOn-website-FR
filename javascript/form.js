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
    let emptyCheck = false;
    try {
        if (tag.value === "") {
            throw new Error(msgError.inputEmpty);
        }
        generateErrorMessage(tag, null);
        emptyCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
    }
    return emptyCheck;
}

function checkText(tag){
    let textCheck = false;
    try {
        if (!tag.value.match(regOnlyTxt)) {
            throw new Error(msgError.textOnly);
        }
        generateErrorMessage(tag, null);
        textCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
    }
    return textCheck;
}

function checkEmail(tag){
    let emailCheck = false;
    try {
        if (!tag.value.match(regEmail)) {
            throw new Error(msgError.email);
        }
        generateErrorMessage(tag, null);
        emailCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
    }
    return emailCheck;
}

function checkDate(tag){
    let dateCheck = false;
    try {
        if (tag.value === "") {
            throw new Error(msgError.inputEmpty);
        }

        const dateParts = tag.value.split("-");
        const year = dateParts[0];
       
        // Check if year has more 4 numbers.
        if (!regYear.test(year)) {
            throw new Error(msgError.dateOver);
        }

        const today = new Date();
        const selectedDate = new Date(tag.value);
        if (selectedDate > today) {
            throw new Error(msgError.dateOver);
        }
        generateErrorMessage(tag, null);
        dateCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
    }
    return dateCheck;
}

function checkRadio(tag){
    let radioCheck = false;
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
    }
    return radioCheck;
}

function checkCheckbox(tag){
    let checkboxCheck = false;
    try {
        if (!tag.checked) {
            throw new Error(msgError.cgu);
        }
        generateErrorMessage(tag, null);
        checkboxCheck = true;
    } catch (error) {
        generateErrorMessage(tag, error.message);
    }
    return checkboxCheck;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const checkFonctions =[
        checkEmptyInput,
        checkText,
        checkEmail,
        checkDate,
        checkRadio,
        checkCheckbox
    ];

    const formInputsArray = Array.from(formDataInput);

    const validationResults = formInputsArray.map((input, index) => {

        let checksResults = {};
    
        if (input.getAttribute('type') != "radio" && input.getAttribute('type') != "checkbox" ) {
            checksResults.emptyCheck = checkEmptyInput(input);
        }
    
        if (input.getAttribute('type') === "text"){
            checksResults.textCheck = checkText(input);
        };
    
        if (input.getAttribute('type') === "email"){
            checksResults.emailCheck = checkEmail(input);
        };
    
        if (input.getAttribute('type') === "date"){
            checksResults.dateCheck = checkDate(input);
        };
    
        if (input.getAttribute('type') === "radio"){
            checksResults.radioCheck = checkRadio(input);
        };
    
        if (input.getAttribute('name') === "cgu"){
            checksResults.checkboxCheck = checkCheckbox(input);
        };
    
        return checksResults;
    });

    const allChecksTrue = validationResults.every(resultObj => {
        return Object.values(resultObj).every(check => check === true);
    });

    if (allChecksTrue) {
        thanksBooking();
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