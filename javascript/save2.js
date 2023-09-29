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
function checkDatas(datas){
    const msgWrapError = document.createElement("div");
    if(datas.value === ""){
        msgWrapError.classList.add("error-msg");
        msgWrapError.textContent = msgError.inputEmpty;
        //generate error action
        datas.classList.add("txt-control-error");
        let datasParent = datas.parentNode;
        datasParent.appendChild(msgWrapError);

    }else{
        msgWrapError.textContent.remove("msgError.inputEmpty");
        datas.classList.remove("txt-control-error");
        thanksBooking();
    }
}



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    checkDatas(first);
    checkDatas(last);
})

first.addEventListener("change", () => {
    checkDatas(first);
});

last.addEventListener("change", () => {
    checkDatas(last);
})
