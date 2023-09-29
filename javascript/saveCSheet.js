// Submit modal function
form.addEventListener("submit", (event) => {
    //stop default submit action
    event.preventDefault();

    let firstVal = first.value;
    let lastVal = last.value;
    let emailVal = email.value;
    let birthdateVal = birthDate.value;
    let quantityVal = quantity.value;
    //let verifControl = true;

    console.log(firstVal);
    console.log(lastVal);
    console.log(emailVal);
    console.log(birthdateVal);
    console.log(quantityVal);


    //Check input value for first name
    if(first.value.match(regOnlyTxt)){ 
        console.log("GOOD JOB");
        firstControl = true;        
    }else{
        console.log("BAD JOB");
        firstControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        first.className +=" txt-control-error";
        const formDataFirst = formData[0];
        formDataFirst.appendChild(msgWrapError);
        console.log(formDataFirst);     
    }

    //Check input value for last name
    if(lastVal.match(regOnlyTxt)){ 
        console.log("GOOD JOB");
        lastControl = true;
    }else{
        console.log("BAD JOB");
        lastControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        last.className +=" txt-control-error";
        const formDataLast = formData[1];
        formDataLast.appendChild(msgWrapError);
        console.log(formDataLast);
    }

    //Check input value for email
    if(emailVal.match(regEmail)){ 
        console.log("GOOD JOB");
        emailControl = true;
    }else{
        console.log("BAD JOB");
        emailControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        email.className += " txt-control-error";
        const formDataEmail = formData[2];
        formDataEmail.appendChild(msgWrapError);
        console.log(formDataEmail);
    }

    //Check input value for birthDate
    if(birthdateVal != ""){ 
        console.log("GOOD JOB");
        birthControl = true;
    }else{
        console.log("BAD JOB");
        birthControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        birthDate.className += " txt-control-error";
        const formDataBirth = formData[3];
        formDataBirth.appendChild(msgWrapError);
        console.log(formDataBirth);
    }

    //Check input value for quantity
    if(quantityVal != ""){ 
        console.log("GOOD JOB");
        quantityControl = true;
    }else{
        console.log("BAD JOB");
        quantityControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        quantity.className += " txt-control-error";
        const formDataQuantity = formData[4];
        formDataQuantity.appendChild(msgWrapError);
        console.log(formDataQuantity);
    }

    if(quantityVal != ""){ 
        console.log("GOOD JOB");
        quantityControl = true;
    }else{
        console.log("BAD JOB");
        quantityControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = errorMsg;
        //generate error action
        quantity.className += " txt-control-error";
        const formDataQuantity = formData[4];
        formDataQuantity.appendChild(msgWrapError);
        console.log(formDataQuantity);
    }

    if( 'city : checked' == null) {
        console.log("BAD JOB");
        cityControl = false;

        const msgWrapError = document.createElement("div");
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = msgError.contestCity;
        //generate error action
        city.className += " txt-control-error";
        const formDataCity = formData[5];
        formDataCity.prepend(msgWrapError);
        console.log(formDataCity);
    }else{
        console.log("GOOD JOB");
        cityControl = true;
    }
    
    

    if(firstControl === true && lastControl === true && emailControl === true && birthControl === true){ 
        console.log("GOOD SEND");
        thanksBooking();
    }else{
        console.log("BAD SEND");
    }    
});


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
        //Reset form
        
    });
    
}

