// Sample user credentials (for demonstration purposes)
const users = [
    { username: "admin", password: "admin123" },
    { username: "team_member", password: "password" }
];

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store logged in status in localStorage
        localStorage.setItem('isLoggedIn', true);
        // Redirect to the company page
        window.location.href = 'company.html';
    } else {
        loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
