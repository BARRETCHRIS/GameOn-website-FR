// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");


// FORM Elements
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");

let listBtnRadio = document.querySelectorAll("input[type=radio]");


 // REGEX
 const regOnlyTxt = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
 const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

 // Message
 const sendMsg = "Merci pour votre inscription";