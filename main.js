// Show the mobile popup when nav-bar icon is clicked
document.querySelector(".nav-bar").addEventListener("click", function () {
  document.querySelector(".mobile-popup").classList.add("active");
});

// Hide the mobile popup when nav-close icon is clicked
document.querySelector(".nav-close").addEventListener("click", function () {
  document.querySelector(".mobile-popup").classList.remove("active");
});

// Hide the mobile popup when any link in the mobile menu is clicked
document.querySelectorAll(".mobile-popup a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".mobile-popup").classList.remove("active");
  });
});
