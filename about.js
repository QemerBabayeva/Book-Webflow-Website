const hamburgerIcon = document.querySelector(".hamburgericon");
const hamburgerMenu = document.querySelector(".hamburgermenu");
const xIcon = document.querySelector(".hamburgermenu i");
const navLinks = document.querySelectorAll(".hamburgermenu ul li a");
hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("show");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show");
  });
});
xIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show");
});
