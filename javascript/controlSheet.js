//creat and show thanks booking message
function thanksBooking(){
    //Creat element for thanks message
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks");
    msgWrapThanks.textContent = sendMsg;

    //Reset form
    const formElement = document.getElementById('reservationForm');
    formElement.reset();

    //Start function remove content elements form
    formData.forEach(e => e.remove());
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);
    //change text form submit button
    formBtnSubmit.textContent = "Fermer";
    //Restart default submit action and reset form
    //NB!! à corriger 
    form.addEventListener("submit", (event) => {
        closeModal();
        //Reflech page
        location.reload();    
    });    
}

// Check datas values empty
function checkEmpty(valInput){
    if (valInput === ""){
        throw new error(msgError.enputEmpty);
    }
}

function checkTxtOnly(valInput){
    if (!regOnlyTxt.test(valInput)){
        throw new error(msgError.textOnly);
    }
}

function checkEmail(email){
    if (!regEmail.test(email)){
        throw new error(msgError.textOnly);
    }
}

function sendErrorMsg(msgError){
    let 
    const msgWrapError = document.createElement("div");
    msgWrapError.classList.add("error-msg");

}