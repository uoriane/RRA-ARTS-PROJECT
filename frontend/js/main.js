// ===============================
// GLOBAL DATA STORE
// ===============================
let recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

// Save all to localStorage
function saveData() {
    localStorage.setItem("recommendations", JSON.stringify(recommendations));
}

// ===============================
// STATUS COLORS
// ===============================
const statusColors = {
    "fully-implemented": "status-green",
    "partially-implemented": "status-orange",
    "not-implemented": "status-red",
    "beyond-control": "status-purple",
    "not-applicable": "status-blue"
};

// Capitalize helper
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).replace("-", " ");
}
