const users = [
    { username: "aditi", password: "aditi123" },
    { username: "user2", password: "password2" },
    // Add more users as needed
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showMessage("Login successful!", "green");
    } else {
        showMessage("Invalid username or password.", "red");
    }

    // Prevent form submission
    return false;
}


