// ================== 1
var txt;
var person = prompt("Welcome to Our Website, Please enter your name:", "Elon Musk");
if (person == null || person == "") {
    txt = "Who Are you!!! but Enjoy your Shopping!";
} else {
    txt = "Hi " + person + "! Enjoy your Shopping!";
}
document.getElementById("welcome").innerHTML = txt;

// ================== 2
function copyDate() {
    var cpyrt = document.getElementById("copyright")
    if (cpyrt) {
       cpyrt.firstChild.nodeValue = (new Date()).getFullYear();
    }
  }
  
window.onload = copyDate;

// ================== 3
function scrollWin() {
    window.scrollTo(0, 0);
}