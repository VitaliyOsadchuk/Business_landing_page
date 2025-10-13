const burger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__hamburger-menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".burger__menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
