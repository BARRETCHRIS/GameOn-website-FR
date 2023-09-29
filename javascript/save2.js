function checkDatas(marker){
    if(marker.value === ""){
        const errorWrap = document.createElement("div");
        marker.classList.add("error-msg");
        errorWrap.textContent = messages.inputEmpty;
    }else{
        marker.classList.remove("error-msg");
        thanksBooking();
    }

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        
        
    })
}

//creat and show thanks booking message
function thanksBooking(){
    //Creat element for thanks message
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks");
    msgWrapThanks.textContent = "Merci pour";
    msgWrapThanks += document.createElement("br");
    msgWrapThanks.innerText += "votre inscription";

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