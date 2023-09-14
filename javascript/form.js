// FORM Elements
function validate(){
    let first = document.getElementById("first"); 
    let last = document.getElementById("last");
    let email = document.getElementById("email");
    let birthDate = document.getElementById("birthdate");
    let quantity =document.getElementById("quantity");

    let listBtnRadio = document.querySelectorAll("input[type=radio]");
    for (let lbr = 0; lbr < listBtnRadio.length; lbr++){console.log(listBtnRadio[lbr].checked)}

    const goodSend = "Merci pour votre inscription"
    
    const form = document.querySelector('form');

    // Quand on submit
    form.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut
        event.preventDefault();
        console.log("Il n’y a pas eu de rechargement de page");
    });

   
    //console.log(modalSubmit);
    console.log(goodSend);

   

}

