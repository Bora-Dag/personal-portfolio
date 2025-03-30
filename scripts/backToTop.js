document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.remove("hidden");
        btn.classList.add("opacity-100");
      } else {
        btn.classList.add("hidden");
        btn.classList.remove("opacity-100");
      }
    });
  
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  