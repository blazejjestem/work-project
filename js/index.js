// Navbar toggle
const navButton = document.querySelector(".nav__toggle-button");

const navMenu = document.querySelector(".nav__menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__toggle-button--active");
  navMenu.classList.toggle("nav__menu--active");
});
