document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendationForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // collect form data
    const formData = new FormData(form);
    const recommendation = Object.fromEntries(formData.entries());

    // get existing recommendations or start new array
    const saved = JSON.parse(localStorage.getItem("recommendations")) || [];

    // add new recommendation
    saved.push({
      ...recommendation,
      createdAt: new Date().toISOString()
    });

    // save back to localStorage
    localStorage.setItem("recommendations", JSON.stringify(saved));

    // feedback
    alert("Recommendation saved successfully ✅");

    // reset form
    form.reset();
  });
});
