// ===============================
// ADD RECOMMENDATION PAGE LOGIC
// ===============================

const form = document.getElementById("recommendationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        recommendations.push(data);
        saveData();

        alert("Recommendation successfully added!");
        form.reset();
    });
}
