
// Submit modal function
form.addEventListener("submit", (event) => {
    // stop default action
    event.preventDefault();
});

// Content form - remove element
function removeFormData() {
    formData.forEach(e => e.remove());
    console.log(form);    
}

function validate(){
    //Creat msg-thanks elements
    const msgWrapThanks = document.createElement ("p");
    msgWrapThanks.classList.add("msg-thanks")
    msgWrapThanks.textContent = sendMsg;
    //Start function remove content elements form
    removeFormData();
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);

    
    // FOR VERIFY
    for (let lbr = 0; lbr < listBtnRadio.length; lbr++){console.log(listBtnRadio[lbr].checked)};
    
    console.log(form);

}

