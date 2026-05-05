document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 120,
    });
  } else {
    console.error(
      "AOS no está cargado. Revisa la ruta de assets/vendor/aos/aos.js",
    );
  }
});

const menuToggle = document.querySelector(".open-menu");
const menuToggles = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav");
const menuLinks = document.querySelectorAll(".nav ul li a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("actives");
    menuToggles.classList.toggle("activesed");
  });

  menuToggles.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("actives");
    menuToggles.classList.toggle("activesed");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("actives");
      menuToggles.classList.remove("activesed");
    });
  });
}
