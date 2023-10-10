// Generate and display error messages for form fields.
function generateErrorMessage(tag, errorMessage) {
    // Find container error messages associated with  inputs
    let msgWrapError = tag.parentNode.querySelector(".error-msg");
    // If error message display.
    if (errorMessage) {
        // Apply red border to indicate the input field error.
        tag.style.border = "#fe142f 2px solid";
        // If no existing error message container, create one.
        if (!msgWrapError) {
            msgWrapError = document.createElement("div");
            msgWrapError.classList.add("error-msg");
            msgWrapError.textContent = errorMessage;
            tag.parentNode.appendChild(msgWrapError);
        }
    } else {
        // If no error message, remove any existing error message container.
        tag.style.border = "none";
        if (msgWrapError) {
            msgWrapError.remove();
        }
    }
}

// Check if inputs are empty and generate an error message if necessary.
function checkEmptyInput(tag){
    // Initialize the Boolean check variable as the result of the function 
    let emptyCheck = false;
    try {
        // Checks if input empty.
        if (tag.value === "") {
            throw new Error(msgError.inputEmpty); // If empty, throw error specific message.
        }
        generateErrorMessage(tag, null);// If field not empty, clear existing error message.
        emptyCheck = true; // Change boolean value if conditions no check
    } catch (error) {
        generateErrorMessage(tag, error.message); // If field empty, generate error message.
    }
    return emptyCheck; // returns check varialble(true or false)
}

function checkText(tag){
    // Initialize the Boolean check variable as the result of the function
    let textCheck = false;
    try {
        if (!tag.value.match(regOnlyTxt)) { //checks if input dont matcht with pattern regOnlyTxt (files : config.js)
            throw new Error(msgError.textOnly); // If dont match, throw error specific message.
        }
        generateErrorMessage(tag, null); // If field match, clear existing error message.
        textCheck = true; //Change boolean value if conditions no check
    } catch (error) {
        generateErrorMessage(tag, error.message); // If field dont match pattern, generate error message.
    }
    return textCheck; // returns check varialble(true or false)
}

function checkEmail(tag){
    let emailCheck = false; // Initialize the Boolean check variable as the result of the function
    try {
        if (!tag.value.match(regEmail)) { //checks if input dont matcht with pattern regEmail (files : config.js)
            throw new Error(msgError.email); // If dont match, throw error specific message.
        }
        generateErrorMessage(tag, null); // If field match, clear existing error message.
        emailCheck = true; //Change boolean value if condition no check
    } catch (error) {
        generateErrorMessage(tag, error.message); // If field dont match pattern, generate error message.
    }
    return emailCheck; // returns check varialble(true or false)
}

function checkDate(tag){
    let dateCheck = false; //Initialize the Boolean check variable as the result of the function
    try {
        if (tag.value === "") { // Checks if input empty
            throw new Error(msgError.inputEmpty);  // If empty, throw error specific message.
        }

        const dateParts = tag.value.split("-"); // Initialize variable to cut date in array
        const year = dateParts[0]; // Initialize variable to comper year with pattern
       
        // Check if year has more 4 numbers.
        if (!regYear.test(year)) { // Checks if input dont matcht with pattern regYear (files : config.js)
            throw new Error(msgError.dateOver); // If dont match, throw error specific message.
        }

        const today = new Date();
        const selectedDate = new Date(tag.value);
        if (selectedDate > today) { // Checks if field is after today's date
            throw new Error(msgError.dateOver); // If later, throw error specific message.
        }
        generateErrorMessage(tag, null);// if no condition is verified, clear existing error message
        dateCheck = true; //Change boolean value if all conditions no check
    } catch (error) {
        generateErrorMessage(tag, error.message); // if a condition is verified, generates the message corresponding to the error
    }
    return dateCheck; // returns check varialble(true or false)
}

function checkRadio(tag){
    let radioCheck = false; //Initialize the Boolean check variable as the result of the function
    try {
        let radioChecked = false; // Initializing the variable to check if at least one radio button is selected.

        cityList.forEach((radio) => { //Loop through the list of radio buttons.
            if (radio.checked) { // If one radio checked
                radioChecked = true; //Change boolean value
            }
        });

        if (!radioChecked) {  // Checks if boolean check variable is false
            throw new Error(msgError.contestCity); // If no radio checked, throw error specific message.
        }
        generateErrorMessage(tag, null); // If radioChecked is true, clear existing error message
        radioCheck = true; //Change boolean value 
    } catch (error) {
        generateErrorMessage(tag, error.message); // if radioCheck is false, generate error message
    }
    return radioCheck; // returns check varialble(true or false)
}

function checkCheckbox(tag){
    //Initialize the Boolean check variable as the result of the function
    let checkboxCheck = false;
    try {
        if (!tag.checked) {  // Checks if input isn't check
            throw new Error(msgError.cgu); // If no checked, throw error specific message.
        }
        generateErrorMessage(tag, null); // If checked, clear existing error message
        checkboxCheck = true; //Change boolean value
    } catch (error) {
        generateErrorMessage(tag, error.message); // if no checked, generate error message
    }
    return checkboxCheck; // returns check varialble(true or false)
}

// Add an "event listener" that reacts when the form is submitted.
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from being submitted automatically, would refresh the page.

    // table containing the verification functions which will be applied to each field of the form.
    const checkFonctions =[
        checkEmptyInput,
        checkText,
        checkEmail,
        checkDate,
        checkRadio,
        checkCheckbox
    ];

    // Transform the NodeList of form elements into an array
    const formInputsArray = Array.from(formDataInput); 

    // Execute each check function for each field in the form
    const validationResults = formInputsArray.map((input, index) => {

        let checksResults = {}; // Create an empty object to store the verification results.

        // Depending on the field type (text, email, date, etc.), apply the appropriate verification function.
        if (input.getAttribute('type') != "radio" && input.getAttribute('type') != "checkbox" ) {
            checksResults.emptyCheck = checkEmptyInput(input);
        }
    
        if (input.getAttribute('type') === "text"){
            checksResults.textCheck = checkText(input);
        };
    
        if (input.getAttribute('type') === "email"){
            checksResults.emailCheck = checkEmail(input);
        };
    
        if (input.getAttribute('type') === "date"){
            checksResults.dateCheck = checkDate(input);
        };
    
        if (input.getAttribute('type') === "radio"){
            checksResults.radioCheck = checkRadio(input);
        };
    
        if (input.getAttribute('name') === "cgu"){
            checksResults.checkboxCheck = checkCheckbox(input);
        };
    
        return checksResults; // Return an object with the results of the check for the inputs.
    });

    // Check if all check results are true.
    const allChecksTrue = validationResults.every(resultObj => {
        return Object.values(resultObj).every(check => check === true);
    });

    // If all checks pass (all values ​​are true), call the function to display the thank you message.
    if (allChecksTrue) {
        thanksBooking();
    }
    
});

//creat and show thanks booking message
function thanksBooking(){
    //Creat element for thanks message
    const msgWrapThanks = document.createElement("p");
    msgWrapThanks.classList.add("msg-thanks");
    msgWrapThanks.innerHTML = sendMsg;

    //Reset form
    const formElement = document.getElementById('reservationForm');
    formElement.reset();

    //Start function remove content elements form
    formData.forEach(e => e.remove());
    //Insert msg-thanks element
    form.prepend(msgWrapThanks);
    //change text form submit button
    formBtnSubmit.textContent = "Fermer";

    //Change submit action and reset form
    
    form.addEventListener("submit", (event) => {
        closeModal();
        //Reflech page
        location.reload();    
    });    
}