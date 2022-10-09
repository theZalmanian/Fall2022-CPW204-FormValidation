window.onload = function () {
    setupButton("register", main);
};
function main() {
    validateIfEmpty("first-name", "First name is required!");
    validateIfEmpty("last-name", "Last name is required!");
}
function validateIfEmpty(id, errorMessage) {
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
