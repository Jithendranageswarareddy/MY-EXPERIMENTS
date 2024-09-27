// Sample data for company's uploaded content
let companyScenarios = [];

// Check if user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn) {
    document.getElementById('postSection').style.display = 'block';
    document.getElementById('notLoggedInMessage').style.display = 'none';
    renderCompanyScenarios();
} else {
    document.getElementById('postSection').style.display = 'none';
    document.getElementById('notLoggedInMessage').style.display = 'block';
}

// Function to add new scenario
document.getElementById('addScenarioForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const videoLink = document.getElementById('videoLink').value;
    const articleLink = document.getElementById('articleLink').value;
    const sourceLink = document.getElementById('sourceLink').value;

    const newScenario = {
        title,
        videoLink,
        articleLink,
        sourceLink
    };

    companyScenarios.push(newScenario);
    renderCompanyScenarios(); // Update the list after adding
});

// Function to render company scenarios
function renderCompanyScenarios() {
    const companyContentDiv = document.getElementById('companyContent');
    companyContentDiv.innerHTML = ''; // Clear previous content

    companyScenarios.forEach((scenario) => {
        const scenarioDiv = document.createElement('div');
        scenarioDiv.classList.add('scenario');
        
        scenarioDiv.innerHTML = `
            <h3>${scenario.title}</h3>
            <p><a href="${scenario.videoLink}" target="_blank">Watch Video</a></p>
            <p><a href="${scenario.articleLink}" target="_blank">Read Article</a></p>
            <p><a href="${scenario.sourceLink}" target="_blank">Sources</a></p>
        `;
        companyContentDiv.appendChild(scenarioDiv);
    });
}

// Logout functionality
document.getElementById('logoutLink').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html'; // Redirect to login page
});
