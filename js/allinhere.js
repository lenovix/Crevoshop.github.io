// ================== 1 - Show Modal & Handle Name Input
window.onload = function () {
    const modal = document.getElementById("popupModal");
    const input = document.getElementById("usernameInput");
    const welcomeText = document.getElementById("welcome");
  
    modal.style.display = "flex";
    input.focus();
  
    // Auto-fill year
    copyDate();
    scrollWin();
  };
  
  // Fungsi ketika klik tombol "Continue"
  function submitName() {
    const input = document.getElementById("usernameInput");
    const name = input.value.trim();
    const modal = document.getElementById("popupModal");
    const welcomeText = document.getElementById("welcome");
  
    let txt = "";
  
    if (name === "") {
      txt = "Who are you?! But enjoy your shopping!";
    } else {
      txt = `Hi ${name}! Enjoy your shopping!`;
    }
  
    welcomeText.textContent = txt;
    modal.style.display = "none";
  }
  
  // ================== 2 - Auto year
  function copyDate() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // ================== 3 - Scroll ke atas
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  