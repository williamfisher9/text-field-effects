const textField = document.getElementById("text1");
const textLabel = document.getElementById("text1Label");

textField.addEventListener("focusin", () => {
    text1Label.style.transform = "translateY(-40px)";
    text1Label.style.color = "#000";
    textField.style.outlineOffset = "0px";
    textField.style.outline = "3px solid black";
})

textField.addEventListener("focusout", () => {
    text1Label.style.transform = "translateY(0px)";
    text1Label.style.color = "#808080";
    textField.style.outlineOffset = "2px";
    textField.style.outline = "1px solid black";
})