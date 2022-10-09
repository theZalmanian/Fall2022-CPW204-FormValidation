window.onload = function () {
    setupButton("register", main);
};
function getByID(id) {
    return document.getElementById(id);
}
function setupButton(id, useFunction) {
    var button = getByID(id);
    button.onclick = useFunction;
}
function main() {
    alert("Test");
}
