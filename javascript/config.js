// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formDataInput = document.querySelectorAll(".formData input");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const formBtnSubmit= document.querySelector("form button");

//const dateNow = Date();
//console.log(dateNow);

console.log(formData);
// FORM Elements
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");

const city = document.querySelectorAll('[name="location"]');
const cgu = document.getElementById('checkbox1');

console.log(city);


 // REGEX
 const regOnlyTxt = new RegExp(
    '^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$');
 const regEmail = new RegExp(
  '^[a-z0-9.-_]+@{1}[a-z0-9.-_]+\.{1}[a-z]{2,20}$');

 // Messages
 const lineBreack = document.createElement ("br");
 const sendMsg = "Merci pour votre inscription";
 //test error message
 const errorMsg = "Error lorem ipsum";

 const msgError = {
   inputEmpty : "Veuillez renseigner ce champs",
   textOnly : "Veuillez inscrire 2 lettres sans chiffres ou caractères spéciaux ",
   email : "Cette adresse email n'est pas valide, veuillez corriger",
   contestCity : "Veuillez choisir une ville",
   cgu : "Veuillez lire et accepter les cgu"


 }

 