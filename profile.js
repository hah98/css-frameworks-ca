document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from local storage
    var name = localStorage.getItem("userName") || "Default User";
    var email = localStorage.getItem("userEmail") || "user@example.com";
  
    // Display user data in profile page
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileEmail").textContent = email;
  });
  