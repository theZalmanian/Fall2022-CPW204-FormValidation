window.onload = function():void {
    // setup onclick event for register button
    setupButton("register", main);
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

function main():void {
    alert("Test");
}