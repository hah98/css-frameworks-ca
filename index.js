document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var name = document.getElementById("registerName").value;
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;
        var avatar = document.getElementById("registerAvatar").value;

        // Simple validation for register form
        if (email.includes("@") && password.length >= 8) {
            // Store user data in local storage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("registerAvatar", avatar);

            // Redirect to profile/index.html upon successful registration
            window.location.href = "./profile/index.html";
        } else {
            alert("Please enter a valid email (must contain @) and password (min. 8 characters).");
        }
    });
});
