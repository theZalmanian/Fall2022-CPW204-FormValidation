window.onload = function () {
    setupButton("register", main);
};
function main() {
    resetAllErrorSpans();
    var firstNameValid = validateHasText("first-name", "First name is required!");
    var lastNameValid = validateHasText("last-name", "Last name is required!");
    var dobValid = validateIsDate("dob", "Please enter as mm/dd/yyyy");
    if (firstNameValid && lastNameValid && dobValid) {
        createMessage("h2", "Thank you for registering!", 3000);
    }
}
function createMessage(element, message, messageTime) {
    var messageHeading = document.createElement(element);
    messageHeading.setAttribute("class", "message");
    messageHeading.innerText = message;
    var registrationForm = getByID("registration-form");
    registrationForm.insertAdjacentElement("afterend", messageHeading);
    setTimeout(function () {
        messageHeading.remove();
    }, messageTime);
}
function validateHasText(id, errorMessage) {
    var textBox = getByID(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        displayError(textBox, errorMessage);
        return false;
    }
    else {
        return true;
    }
}
function validateIsDate(id, errorMessage) {
    var dateHasText = validateHasText("dob", "Date of Birth is required!");
    if (dateHasText == true) {
        var textBox = getByID(id);
        var textBoxValue = textBox.value;
        var dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
        var isDate = dateFormat.test(textBoxValue);
        if (isDate == false) {
            displayError(textBox, errorMessage);
            return false;
        }
        else {
            return true;
        }
    }
}
function getByID(id) {
    return document.getElementById(id);
}
function setupButton(id, useFunction) {
    var button = getByID(id);
    button.onclick = useFunction;
}
function displayError(inputElement, errorMessage) {
    inputElement.nextElementSibling.innerHTML = errorMessage;
}
function resetAllErrorSpans() {
    var allErrorSpans = document.querySelectorAll("span");
    for (var i = 0; i < allErrorSpans.length; i++) {
        var currentSpan = allErrorSpans[i];
        if (currentSpan.hasAttribute("data-required")) {
            currentSpan.innerHTML = "*";
        }
        else {
            currentSpan.innerHTML = "";
        }
    }
}
