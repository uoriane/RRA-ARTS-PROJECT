const dashboard = document.getElementById("dashboard");
const searchInput = document.getElementById("searchInput");
const filterDept = document.getElementById("filterDept");
const filterStatus = document.getElementById("filterStatus");

const statusColors = {
  "fully-implemented": "status-green",
  "partially-implemented": "status-orange",
  "not-implemented": "status-red",
  "beyond-control": "status-purple",
  "not-applicable": "status-blue"
};

function renderDashboard(){
  if(!dashboard) return;

  dashboard.innerHTML = '';

  const filtered = recommendations.filter(r=>{
    const matchesSearch = r.title.toLowerCase().includes(searchInput?.value.toLowerCase()||'');
    const matchesDept = filterDept?.value ? r.department.includes(filterDept.value) : true;
    const matchesStatus = filterStatus?.value ? r.status===filterStatus.value : true;
    return matchesSearch && matchesDept && matchesStatus;
  });

  filtered.forEach(r=>{
    const card = document.createElement('div');
    card.className = `p-4 rounded shadow bg-white ${statusColors[r.status]} transform transition hover:scale-105`;
    card.innerHTML = `
      <h3 class="font-bold text-lg mb-1">${r.title}</h3>
      <p class="text-gray-700 mb-1">${r.description}</p>
      <p class="text-sm"><strong>Team:</strong> ${r.team} | <strong>Staff:</strong> ${r.staff}</p>
      <p class="text-sm"><strong>Audit Type:</strong> ${r.auditType}</p>
      <p class="text-sm"><strong>Department:</strong> ${r.department}</p>
      <p class="text-sm italic">Status: ${capitalize(r.status)}</p>
      ${r.deadline?`<p class="text-sm">Deadline: ${r.deadline}</p>`:''}
    `;
    dashboard.appendChild(card);
  });

  updateChart();
}

if(searchInput) searchInput.addEventListener('input', renderDashboard);
if(filterDept) filterDept.addEventListener('input', renderDashboard);
if(filterStatus) filterStatus.addEventListener('change', renderDashboard);

// Chart.js
let chart;
function updateChart(){
  const ctx = document.getElementById("statusChart")?.getContext("2d");
  if(!ctx) return;

  const totals = { "fully-implemented":0,"partially-implemented":0,"not-implemented":0,"beyond-control":0,"not-applicable":0 };
  recommendations.forEach(r=>totals[r.status]++);

  if(chart) chart.destroy();
  chart = new Chart(ctx,{
    type:'bar',
    data:{
      labels:["Fully","Partial","Not","Beyond Control","Not Applicable"],
      datasets:[{
        label:"Recommendations",
        data:Object.values(totals),
        backgroundColor:["#4CAF50","#FF9800","#F44336","#9C27B0","#2196F3"]
      }]
    },
    options:{responsive:true,plugins:{legend:{display:false}}}
  });
}

renderDashboard();
