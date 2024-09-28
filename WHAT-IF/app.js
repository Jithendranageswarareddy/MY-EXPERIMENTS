document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const contentList = document.getElementById("contentList");
    const welcomeMessage = document.getElementById("welcomeMessage");
    
    // Function to fetch content from the backend
    function fetchContent() {
        fetch('/api/content')
            .then(response => response.json())
            .then(data => {
                contentList.innerHTML = ''; // Clear existing content
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'item';
                    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><button class="viewOptions">View Options</button>`;
                    contentList.appendChild(div);
                });
            });
    }

    // Display a welcome message
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        welcomeMessage.textContent = "Good Morning! Welcome to What If!";
    } else if (currentHour < 18) {
        welcomeMessage.textContent = "Good Afternoon! Welcome to What If!";
    } else {
        welcomeMessage.textContent = "Good Evening! Welcome to What If!";
    }

    // Fetch content on page load
    fetchContent();
    
    // Add search functionality
    searchBar.addEventListener("input", function(event) {
        const searchText = event.target.value.toLowerCase();
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = title.includes(searchText) ? 'block' : 'none';
        });
    });

    // Event listener for view options
    contentList.addEventListener('click', function(event) {
        if (event.target.classList.contains('viewOptions')) {
            alert('Options: Video, Article, Podcast, Audio');
        }
    });
});
