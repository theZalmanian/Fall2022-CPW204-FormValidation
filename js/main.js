window.onload = function () {
    setupButton("register", main);
};
function main() {
    resetAllErrorSpans();
    validateHasText("first-name", "First name is required!");
    validateHasText("last-name", "Last name is required!");
    var dateHasText = validateHasText("dob", "Date of Birth is required!");
    if (dateHasText == true) {
        validateIsDate("dob", "Please enter as mm/dd/yyyy");
    }
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
