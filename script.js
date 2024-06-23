const textField = document.getElementById("text1");
const textLabel = document.getElementById("text1Label");

const textField2 = document.getElementById("text2");
const textLabel2 = document.getElementById("text2Label");

const textField4 = document.getElementById("text4");
const title4 = document.getElementById("title4");

const textField5 = document.getElementById("text5");
const textLabel5 = document.getElementById("text5Label");
const textIcon5 = document.getElementById("text5Icon");

textField.addEventListener("focusin", () => {
    text1Label.style.transform = "translateY(-40px)";
    text1Label.style.color = "#000";
    textField.style.outlineOffset = "0px";
    textField.style.outline = "3px solid black";
});

textField.addEventListener("focusout", () => {
    text1Label.style.transform = "translateY(0px)";
    text1Label.style.color = "#808080";
    textField.style.outlineOffset = "2px";
    textField.style.outline = "1px solid black";
});

textField2.addEventListener("focusin", () => {
    textLabel2.style.transform = "translateY(-30px)";
});

textField2.addEventListener("focusout", () => {
    textLabel2.style.transform = "translateY(0px)";
});

textLabel2.addEventListener("click", () => {
    textLabel2.style.transform = "translateY(-30px)";
    textField2.focus();
})

textField4.addEventListener("focusin", () => {
    textField4.style.borderColor = "#109be6";
    title4.style.backgroundColor = "#109be6";
    title4.style.borderColor = "#109be6";
    title4.style.color = "white";
});

textField4.addEventListener("focusout", () => {
    textField4.style.borderColor = "#afaeae";
    title4.style.backgroundColor = "#f1f1f1";
    title4.style.borderColor = "#afaeae";
    title4.style.color = "black";
});

textField5.addEventListener("focusin", () => {
    textField5.style.borderBottomColor = "yellow";
    textLabel5.style.transform = "translateY(-20px)";
    textLabel5.style.color = "yellow";
    textIcon5.style.color = "yellow";
});

textField5.addEventListener("focusout", () => {
    textField5.style.borderBottomColor = "black";
    textLabel5.style.transform = "translateY(0px)";
    textLabel5.style.color = "black";
    textIcon5.style.color = "black";
});
