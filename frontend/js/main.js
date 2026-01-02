// Global variables
let recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

function saveData() {
  localStorage.setItem("recommendations", JSON.stringify(recommendations));
}

function capitalize(text){
  return text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, ' ');
}
 window.history.back();
function goBack() {
  window.history.back();
}
