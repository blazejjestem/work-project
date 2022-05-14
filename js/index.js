// Navbar toggle
const navButton = document.querySelector(".nav__toggle-button");

const navMenu = document.querySelector(".nav__menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__toggle-button--active");
  navMenu.classList.toggle("nav__menu--active");
});
// Navbar close on window resize > 1250 px
window.onresize = () => {
  if (
    window.innerWidth >= 1250 &&
    navMenu.classList.contains("nav__menu--active")
  ) {
    navMenu.classList.remove("nav__menu--active");
    navButton.classList.remove("nav__toggle-button--active");
  }
};
