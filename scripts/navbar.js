document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
  
      if (!navLinks.classList.contains("hidden")) {
        navLinks.classList.add("animate-dropdown");
      } else {
        navLinks.classList.remove("animate-dropdown");
      }
    });
  });
  