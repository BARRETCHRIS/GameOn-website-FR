// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");

 // REGEX
 const regOnlyTxt = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
 const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;