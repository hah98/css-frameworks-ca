document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user data from local storage
  var name = localStorage.getItem("userName") || "Default User";
  var email = localStorage.getItem("userEmail") || "user@example.com";
  var avatar = localStorage.getItem("registerAvatar");

  // Display user data in profile page
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileEmail").textContent = email;
  document.getElementById("PN").textContent = name;

  // Set the avatar if provided, otherwise hide the img element or show a default placeholder
  var avatarImg = document.getElementById("profileAvatar");
  if (avatar) {
    avatarImg.src = avatar;
  } else {
    avatarImg.style.display = "none"; // Hide if no avatar is set
  }
});
