/* JS for form vaøidation send user to feed page */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;

        // Simple validation for login form
        if (email.includes("@") && password.length >= 8) {
            // Redirect to feed/index.html upon successful validation
            window.location.href = "./feed/index.html";
        } else {
            alert("Please enter a valid email (must contain @) and password (min. 8 characters).");
        }
    });

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;

        // Simple validation for register form
        if (email.includes("@") && password.length >= 8) {
            // Redirect to feed/index.html upon successful validation
            window.location.href = "./feed/index.html";
        } else {
            alert("Please enter a valid email (must contain @) and password (min. 8 characters).");
        }
    });
});


