document.addEventListener("DOMContentLoaded", function () {
  // Register Form Handler
  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("registerName").value;
      var email = document.getElementById("registerEmail").value;
      var password = document.getElementById("registerPassword").value;
      var avatar = document.getElementById("registerAvatar").value;

      if (email.includes("@") && password.length >= 8) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("registerAvatar", avatar);

        // Redirect to profile/index.html
        window.location.href = "./profile/index.html";
      } else {
        alert(
          "Please enter a valid email (must contain @) and password (min. 8 characters)."
        );
      }
    });

  // Login Form Handler
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("loginEmail").value;
      var password = document.getElementById("loginPassword").value;

      if (email.includes("@") && password.length >= 8) {
        var storedEmail = localStorage.getItem("userEmail");
        var storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
          // Redirect to profile/index.html
          window.location.href = "./profile/index.html";
        } else {
          alert(
            "Invalid email or password. + Or You have to register a user first."
          );
        }
      } else {
        alert(
          "Please enter a valid email (must contain @) and password (min. 8 characters)."
        );
      }
    });
});
