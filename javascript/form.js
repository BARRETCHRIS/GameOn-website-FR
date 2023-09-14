
// Fonction submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    //console.log("Il n’y a pas eu de rechargement de page");
});

function removeFormData() {
    formData.forEach(e => e.remove());
    console.log(form);


}

function validate(){
    
    const validationWrap = document.createElement("p");
    const validationMsg = validationWrap.innerText = sendMsg;

    removeFormData();
    form.innerHTML = validationMsg;

    for (let lbr = 0; lbr < listBtnRadio.length; lbr++){console.log(listBtnRadio[lbr].checked)};
    
    console.log(validationMsg);

   

}

