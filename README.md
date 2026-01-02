# ARTS Audit Recommendation Tracking System (Frontend)
# Overview

ARTS is a web-based Audit Recommendation Tracking System designed for the Rwanda Revenue Authority (RRA). It automates the submission, tracking, and reporting of audit recommendations across multiple RRA departments.

The frontend is built using HTML, Tailwind CSS, and vanilla JavaScript, with Chart.js for data visualization. Data is stored in localStorage to allow immediate interaction without a backend.

The system is mobile-friendly, responsive, and uses the official RRA color palette for a professional look.

# Features

 Home Page
--
Clean, informative landing page

Links to Dashboard and Add Recommendation pages

RRA-branded colors and logo

Add Recommendation
--
Form to capture audit recommendations

Includes fields: title, team, audit type, department, description, status, and deadline

Data saved to localStorage

Fully mobile-friendly

Dashboard
--

Displays all recommendations in cards

Cards are color-coded by status:

Green: Fully Implemented

Orange: Partially Implemented

Red: Not Implemented

Purple: Beyond RRA Management Control

Blue: Not Applicable

Filter by department, status, and search by title

Interactive Chart.js bar chart showing implementation percentages

Fully responsive grid layout for cards

Data Persistence
--

All recommendations are stored in localStorage (For now )

No backend required for immediate testing (For now)

RRA Color Palette 
--
Status	Color Code	Class Name
Fully Implemented	#006400	.status-green
Partially Implemented	#F4A300	.status-orange
Not Implemented	#C62828	.status-red
Beyond RRA Management Control	#7E57C2	.status-purple
Not Applicable	#0047AB	.status-blue

Project Structure
--

rra-arts-frontend/
│
├── index.html                  
├── dashboard.html              
├── add-recommendation.html     
│
├── css/
│   └── style.css               
│
├── js/
│   ├── main.js                 
│   ├── add.js                  
│   └── dashboard.js       
│
└── assets/
    └── rra-logo.png         

# Technologies Used

1) HTML5 – structure of web pages

2) Tailwind CSS – styling and responsive design

3) Vanilla JavaScript – DOM manipulation and localStorage

4) Chart.js – visualization of recommendation status

5) LocalStorage – data persistence without a backend

# Installation & Usage

Clone or download the repository:

git clone https://github.com/yourusername/rra-arts-frontend.git


Open the project folder in VS Code or any code editor.

Start a local server (recommended) to run the app:

VS Code Live Server extension
or

Use Python HTTP server:

# Python 3
python -m http.server 5500


Open your browser and navigate to:

http://127.0.0.1:5500/index.html


Navigate through Home → Add Recommendation → Dashboard.

Add recommendations, filter, and see them immediately reflected on the dashboard.

# Usage Notes

1) Mobile-Friendly: Fully responsive for mobile, tablet, and desktop screens

2) No Backend: All data is stored in the browser’s localStorage

3) Color-Coding: Status badges and card borders indicate implementation status

4) Charts: Dashboard bar chart updates automatically with new recommendations

# Future Improvements

1) Edit and delete recommendations directly from the dashboard

2) Department-wise dashboards

3) Export dashboard data to Excel/PDF

4) Add authentication and backend integration

5) Animations for card hover effects and form submission

# Author

UWINEZA ORIANE – Frontend Developer
Rwanda Revenue Authority Audit Recommendation Tracking System Project
