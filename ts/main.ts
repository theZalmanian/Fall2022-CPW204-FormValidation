window.onload = function():void {
    // setup onclick event for register button
    setupButton("register", main);
}

/** 
 * This function is called when the register button is clicked, 
 * and validates the form.
*/
function main():void {
    // reset all previous errors
    resetAllErrorSpans();

    // validate first name
    validateHasText("first-name", "First name is required!");

    // validate last name
    validateHasText("last-name", "Last name is required!");

    // validate date of birth
    let dateHasText = validateHasText("dob", "Date of Birth is required!")
    if(dateHasText == true) {
        validateIsDate("dob", "Please enter as mm/dd/yyyy");
    }
}

/**
 * Returns true if the textbox contains text,
 * returns false if textbox is empty
 * @param id The textbox's id
 * @param errorMessage The corresponding error message
 * @returns If the texbox contains text
 */
 function validateHasText(id:string, errorMessage:string):boolean {
    // grab textbox by id
    let textBox = <HTMLInputElement>getByID(id);
    // get textbox value
    let textBoxValue:string = textBox.value;

    // if textbox is empty, show corresponding error
    if (textBoxValue == "") {
        displayError(textBox, errorMessage);
        return false;
    }
    else {
        return true;
    }
}

/**
 * Returns true if the date entered is formatted correctly,
 * otherwise returns false.
 * @param id The textbox's id
 * @param errorMessage The corresponding error message
 * @returns If the entered date is a valid date
 */
function validateIsDate(id:string, errorMessage:string):boolean {
    // grab textbox by id
    let textBox = <HTMLInputElement>getByID(id);
    // get textbox value
    let textBoxValue:string = textBox.value;
    
    // setup regular expression for validation
    // mm/dd/yyyy or m/d/yyyy
    let dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/g

    // test if user input matches proper formatting
    let isDate = dateFormat.test(textBoxValue);

    // if formatting is incorrect, show corresponding error
    if (isDate == false) {
        displayError(textBox, errorMessage);
        return false;
    }
    else {
        return true;
    }
}

/**
 * Shortened form of the document.getElementById method
 * @param {string} id - The element's id.
 * @returns The corresponding HTML Element
 */
 function getByID(id:string):HTMLElement {
    return document.getElementById(id);
}

/**
 * Sets up an onclick event for a button.
 * @param {string} id The button's id.
 * @param {any} useFunction The function to be called when button is clicked.
 */
 function setupButton(id:string, useFunction:() => void):void {
    let button:HTMLElement = getByID(id);
    button.onclick = useFunction;
}

/**
 * Displays an error message through a span
 * @param {HTMLInputElement} inputElement The input element containing an invalid entry.
 * @param errorMessage The corresponding error message
 */
 function displayError(inputElement:HTMLInputElement, errorMessage:string):void  { 
    // grab associated span and display error
    inputElement.nextElementSibling.innerHTML = errorMessage;
}

/**
 * Clears out all previous errors
 */
 function resetAllErrorSpans():void {
    // get all error spans
    let allErrorSpans:NodeListOf<HTMLSpanElement> = document.querySelectorAll("span");

    // reset all error spans
    for (let i:number = 0; i < allErrorSpans.length; i++) {
        // get individual span
        let currentSpan:HTMLSpanElement = allErrorSpans[i];

        // if required error span reset value to asterisk
        if(currentSpan.hasAttribute("data-required")) {
            currentSpan.innerHTML = "*";
        }
        // otherwise reset value to empty
        else {
            currentSpan.innerHTML = "";
        }
    }
}