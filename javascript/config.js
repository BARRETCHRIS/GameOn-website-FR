// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const formData = document.querySelectorAll(".formData");
const formDataInput = document.querySelectorAll(".formData input");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const formBtnSubmit= document.querySelector("form button");

console.log(formDataInput);
let inputText = document.querySelectorAll(`[type="text"]`)
//console.log(inputText);


// FORM Elements
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");

const cityList = document.querySelectorAll('[name="location"]');

const cgu = document.getElementById('checkbox1');

 // REGEX
// regOnlyTxt checks if the string contains 2 to 20 letters, optionally separated by a hyphen. 
const regOnlyTxt = new RegExp(
    '^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$');
// regEmail checks if the email address is valid.
// Ensures if email starts with letters, digits, dots, hyphens, or underscores, followed by "@" symbol, followed by letters, digits, hyphens, or underscores, followed by dot, and finally 2 to 10 letters.
const regEmail = new RegExp(
  '^[A-Za-z0-9.-_]+@[A-Za-z0-9.-_]+\\.[a-z]{2,4}$');
// regYear checks if the year in the date input has exactly 4 digits.
// Ensures year consists four numeric characters.
const regYear = /^\d{1,4}$/;

 // Messages
const sendMsg = "Merci pour" +`<br>`+ "votre inscription";
 
const msgError = {
   inputEmpty : "Merci de renseigner ce champs",
   textOnly : "Merci d'inscrire au moins 2 lettres sans chiffres ou caractères spéciaux ",
   email : "Cette adresse email n'est pas valide, merci de corriger",
   dateOver : "Le future ce n'est pas pour tout de suite, merci de corriger",
   contestCity : "Merci de choisir une ville",
   cgu : "Merci de lire et accepter les cgu"
}

  

let divError = document.querySelectorAll(".error-msg");



 