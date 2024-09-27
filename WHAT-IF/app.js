// Sample data for What-If and Hypothetical Scenarios
const scenarios = {
    "what-if": [
        {
            title: "What If the Earth Stopped Spinning?",
            videoLink: "https://www.youtube.com/watch?v=XYZ",
            articleLink: "#",
            sourceLink: "#"
        },
        {
            title: "What If There Was No Moon?",
            videoLink: "https://www.youtube.com/watch?v=ABC",
            articleLink: "#",
            sourceLink: "#"
        }
    ],
    "hypothetical": [
        {
            title: "What If You Could Read Minds?",
            videoLink: "https://www.youtube.com/watch?v=DEF",
            articleLink: "#",
            sourceLink: "#"
        },
        {
            title: "What If We Lived on Mars?",
            videoLink: "https://www.youtube.com/watch?v=GHI",
            articleLink: "#",
            sourceLink: "#"
        }
    ]
};

// Function to render scenarios
function renderScenarios(category) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    scenarios[category].forEach((scenario) => {
        const scenarioDiv = document.createElement('div');
        scenarioDiv.classList.add('scenario');
        
        scenarioDiv.innerHTML = `
            <h3>${scenario.title}</h3>
            <p><a href="${scenario.videoLink}" target="_blank">Watch Video</a></p>
            <p><a href="${scenario.articleLink}" target="_blank">Read Article</a></p>
            <p><a href="${scenario.sourceLink}" target="_blank">Sources</a></p>
        `;
        contentDiv.appendChild(scenarioDiv);
    });
}

// Event listeners for category links
document.getElementById('what-if-link').addEventListener('click', () => {
    renderScenarios('what-if');
});

document.getElementById('hypothetical-link').addEventListener('click', () => {
    renderScenarios('hypothetical');
});

// Search functionality
function searchScenario() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    let found = false;
    Object.keys(scenarios).forEach((category) => {
        scenarios[category].forEach((scenario) => {
            if (scenario.title.toLowerCase().includes(query)) {
                const scenarioDiv = document.createElement('div');
                scenarioDiv.classList.add('scenario');
                
                scenarioDiv.innerHTML = `
                    <h3>${scenario.title}</h3>
                    <p><a href="${scenario.videoLink}" target="_blank">Watch Video</a></p>
                    <p><a href="${scenario.articleLink}" target="_blank">Read Article</a></p>
                    <p><a href="${scenario.sourceLink}" target="_blank">Sources</a></p>
                `;
                contentDiv.appendChild(scenarioDiv);
                found = true;
            }
        });
    });

    if (!found) {
        contentDiv.innerHTML = '<p>No scenarios found.</p>';
    }
}
