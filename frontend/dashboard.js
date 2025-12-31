// ===============================
// DASHBOARD RENDERING LOGIC
// ===============================

const dashboard = document.getElementById("dashboard");
const searchInput = document.getElementById("searchInput");
const filterDept = document.getElementById("filterDept");
const filterStatus = document.getElementById("filterStatus");

// Render cards
function renderDashboard() {
    if (!dashboard) return;

    dashboard.innerHTML = "";

    const filtered = recommendations.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchInput.value.toLowerCase());
        const matchesDept = filterDept.value ? item.department === filterDept.value : true;
        const matchesStatus = filterStatus.value ? item.status === filterStatus.value : true;

        return matchesSearch && matchesDept && matchesStatus;
    });

    filtered.forEach(item => {
        const card = document.createElement("div");

        card.className = `
            p-5 shadow rounded bg-white border-l-8 
            ${statusColors[item.status]}
        `;

        card.innerHTML = `
            <h3 class="font-bold text-xl mb-2">${item.title}</h3>
            <p class="text-gray-700 mb-2">${item.description}</p>

            <p><strong>Team:</strong> ${item.team}</p>
            <p><strong>Audit Type:</strong> ${item.auditType}</p>
            <p><strong>Department:</strong> ${item.department}</p>
            <p><strong>Status:</strong> ${capitalize(item.status)}</p>
            <p><strong>Deadline:</strong> ${item.deadline || "None"}</p>
        `;

        dashboard.appendChild(card);
    });

    updateChart();
}

// ===============================
// FILTER EVENTS
// ===============================
if (searchInput) searchInput.addEventListener("input", renderDashboard);
if (filterDept) filterDept.addEventListener("change", renderDashboard);
if (filterStatus) filterStatus.addEventListener("change", renderDashboard);

// ===============================
// CHART.JS BAR CHART
// ===============================

let chart;

function updateChart() {
    if (!document.getElementById("statusChart")) return;

    const totals = {
        "fully-implemented": 0,
        "partially-implemented": 0,
        "not-implemented": 0,
        "beyond-control": 0,
        "not-applicable": 0
    };

    recommendations.forEach(r => totals[r.status]++);

    const ctx = document.getElementById("statusChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Fully Implemented",
                "Partially Implemented",
                "Not Implemented",
                "Beyond Control",
                "Not Applicable"
            ],
            datasets: [{
                label: "Number of Recommendations",
                data: Object.values(totals),
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue("--rra-green"),
                    getComputedStyle(document.documentElement).getPropertyValue("--rra-orange"),
                    getComputedStyle(document.documentElement).getPropertyValue("--rra-red"),
                    getComputedStyle(document.documentElement).getPropertyValue("--rra-purple"),
                    getComputedStyle(document.documentElement).getPropertyValue("--rra-blue")
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });
}

renderDashboard();
