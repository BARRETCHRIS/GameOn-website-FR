// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formDataInput = document.querySelectorAll(".formData input");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const formBtnSubmit= document.querySelector("form button");

console.log(formDataInput);
// FORM Elements
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");

let listBtnRadio = document.querySelectorAll("input[type=radio]");


 // REGEX
 const regOnlyTxt = new RegExp(
    '^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$');
 const regEmail = new RegExp(
  '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

 // Messages
 const sendMsg = "Merci pour votre inscription";
 //test error message
 const msgError = "Error lorem ipsum";