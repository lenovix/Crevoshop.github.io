
var txt;
var person = prompt("Welcome to Our Website, Please enter your name:", "Elon Musk");
if (person == null || person == "") {
    txt = "Anonymus, Enjoy your Shopping!";
} else {
    txt = "Hi " + person + "! Enjoy your Shopping!";
}
document.getElementById("welcome").innerHTML = txt;