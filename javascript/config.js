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
//let city = "";


const cgu = document.getElementById('checkbox1');

console.log(birthDate.value);


 // REGEX
 const regOnlyTxt = new RegExp(
    '^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$');
 const regEmail = new RegExp(
  '^[a-z0-9.-_]+@{1}[a-z0-9-_]+\\.{1}[a-z]{2,4}$');

 // Messages
 const lineBreack = document.createElement ("br");
 const sendMsg = "Merci pour" +`<br>`+ "votre inscription";
 //test error message
 const errorMsg = "Error lorem ipsum";

 const msgError = {
   inputEmpty : "Merci de renseigner ce champs",
   textOnly : "Merci d'inscrire au moins 2 lettres sans chiffres ou caractères spéciaux ",
   email : "Cette adresse email n'est pas valide, merci de corriger",
   dateOver : "Le future ce n'est pas pour tout de suite, merci de corriger",
   contestCity : "Merci de choisir une ville",
   cgu : "Merci de lire et accepter les cgu"
 }

  

  let divError = document.querySelectorAll(".error-msg");

  console.log(divError);


 