// Navbar toggle
const navButton = document.querySelector(".nav__toggle-button");
const links = document.querySelectorAll(".link");
const navMenu = document.querySelector(".nav__menu");

// Close navbar on clicking a link.

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--active");
    navButton.classList.remove("nav__toggle-button--active");
  });
});
// Open/close navbar with toggle button
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

// Carousel

new Splide("#models-carousel", {
  classes: {
    arrows: "splide__arrows arrow arrow--square",
  },
  type: "loop",
  perPage: 1,
  focus: "center",
  padding: "30%",
  width: "100%",
  gap: "40%",
  pagination: false,
  // lazyLoad: true,
  breakpoints: {
    900: {
      padding: 0,
    },
  },
}).mount();

new Splide("#formentor-info__carousel", {
  type: "loop",
  classes: {
    arrows: "splide__arrows arrow arrow--round",
    page: "splide__pagination__page square-page",
  },
  perPage: 3,
  gap: 40,
  pagination: false,
  padding: 16,
  pagination: true,
  breakpoints: {
    550: {
      perPage: 1,
      arrows: false,
    },
    950: {
      perPage: 2,
    },
  },

  // width: "100%",
}).mount();

document.querySelectorAll(".design-carousel").forEach((carousel) => {
  new Splide(carousel, {
    classes: {
      arrows: "splide__arrows arrow arrow--square",
    },
    type: "loop",
    pagination: false,
  }).mount();
});
