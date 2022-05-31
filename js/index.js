// Navbar toggle
const navButton = document.querySelector(".nav__toggle-button");
const links = document.querySelectorAll(".link");
const navMenu = document.querySelector(".nav__menu");

// Close navbar on clicking a link.

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--active");
    navButton.classList.remove("nav__toggle-button--active");
    offerFormSection.classList.remove("offer-form--active");
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

// Form section

const dropdownBtn = document.querySelector(".dropdown__btn");
const formArrow = document.querySelector(".showcase__arrow");
const formList = document.querySelector(".dropdown__list");
// Opening the dropdown menu
dropdownBtn.addEventListener("click", (e) => {
  formList.classList.toggle("dropdown__list--active");
  formArrow.classList.toggle("showcase__arrow--open");
});

// Selecting item from menu

const items = document.querySelectorAll(".dropdown__item");
const showcaseImg = document.querySelector(".showcase__img");
const showcaseText = document.querySelector(".showcase__text");
const model = document.querySelector('input[name="model"]');
let helperId = "0";

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      if (item.dataset.id === helperId) {
        item.classList.remove("dropdown__item--hidden");
      }
    });
    item.classList.add("dropdown__item--hidden");
    showcaseText.innerText = item.lastElementChild.innerText;
    showcaseImg.setAttribute("src", item.firstElementChild.getAttribute("src"));
    showcaseImg.setAttribute("alt", item.firstElementChild.getAttribute("alt"));
    model.value = item.dataset.value;
    helperId = item.dataset.id;
    formList.classList.toggle("dropdown__list--active");
    formArrow.classList.toggle("showcase__arrow--open");
  });
});

// Form validation

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  const model = form.model.value;
  const fName = form.fName.value;
  const lName = form.lName.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const personalDataAgreed = form["personal-data"].checked;
  const emailAgreed = form["email-checkbox"].checked;
  const phoneAgreed = form["phone-checkbox"].checked;
  const textMessageAgreed = form["text-message-checkbox"].checked;

  if (fName.trim().length < 3) {
    document
      .querySelector(".invalid-name")
      .classList.remove("invalid-input--hidden");
    form.scrollIntoView();
  } else {
    document
      .querySelector(".invalid-name")
      .classList.add("invalid-input--hidden");
  }

  if (
    email.trim().length < 3 ||
    email.indexOf("@") === -1 ||
    email.indexOf(".") === -1
  ) {
    document
      .querySelector(".invalid-email")
      .classList.remove("invalid-input--hidden");
    form.scrollIntoView();
  } else {
    document
      .querySelector(".invalid-email")
      .classList.add("invalid-input--hidden");
  }

  if (phone.trim().length !== 9) {
    document
      .querySelector(".invalid-phone")
      .classList.remove("invalid-input--hidden");
    form.scrollIntoView();
  } else {
    document
      .querySelector(".invalid-phone")
      .classList.add("invalid-input--hidden");
  }
  e.preventDefault();
});

document.querySelectorAll(".fade-in").forEach((item) => {
  window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight;
    item.getBoundingClientRect().top < windowHeight - 100 &&
      item.classList.add("fade-in--active");
  });
});

// Open offer form

const openFormBtns = document.querySelectorAll(".offer-btn");
const offerFormSection = document.querySelector(".offer-form");
openFormBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    offerFormSection.classList.toggle("offer-form--active");
  });
});

// Close offer form

const closeBtn = document.querySelector(".close-form");

closeBtn.addEventListener("click", () => {
  offerFormSection.classList.toggle("offer-form--active");
});

// Open offer dropdown
const offerDropdownBtn = document.querySelector(".offer-dropdown__btn");
const offerFormArrow = document.querySelector(".offer-showcase__arrow");
const offerFormList = document.querySelector(".offer-dropdown__list");
// Opening the dropdown menu
offerDropdownBtn.addEventListener("click", (e) => {
  offerFormList.classList.toggle("dropdown__list--active");
  offerFormArrow.classList.toggle("showcase__arrow--open");
});

// Selecting item from menu offer-form

const offerItems = document.querySelectorAll(".offer-dropdown__item");
const offerShowcaseImg = document.querySelector(".offer-showcase__img");
const offerShowcaseText = document.querySelector(".offer-showcase__text");
const offerModel = document.querySelector('input[name="offer-model"]');
let offerHelperId = "0";

offerItems.forEach((item) => {
  item.addEventListener("click", () => {
    offerItems.forEach((offerItem) => {
      if (offerItem.dataset.id === offerHelperId) {
        offerItem.classList.remove("dropdown__item--hidden");
      }
    });
    item.classList.add("dropdown__item--hidden");
    offerShowcaseText.innerText = item.lastElementChild.innerText;
    offerShowcaseImg.setAttribute(
      "src",
      item.firstElementChild.getAttribute("src")
    );
    offerShowcaseImg.setAttribute(
      "alt",
      item.firstElementChild.getAttribute("alt")
    );
    offerModel.value = item.dataset.value;
    offerHelperId = item.dataset.id;
    offerFormList.classList.toggle("dropdown__list--active");
    offerFormArrow.classList.toggle("showcase__arrow--open");
  });
});

// offer form validation
const offerForm = document.getElementById("offer-form");
offerForm.addEventListener("submit", (e) => {
  const model = offerForm["offer-model"].value;
  const fName = offerForm.fName.value;
  const lName = offerForm.lName.value;
  const email = offerForm.email.value;
  const phone = offerForm.phone.value;
  const personalDataAgreed = offerForm["personal-data"].checked;
  const emailAgreed = offerForm["email-checkbox"].checked;
  const phoneAgreed = offerForm["phone-checkbox"].checked;
  const textMessageAgreed = offerForm["text-message-checkbox"].checked;

  if (fName.trim().length < 3) {
    document
      .querySelector(".offer-invalid-name")
      .classList.remove("invalid-input--hidden");
  } else {
    document
      .querySelector(".offer-invalid-name")
      .classList.add("invalid-input--hidden");
  }

  if (
    email.trim().length < 3 ||
    email.indexOf("@") === -1 ||
    email.indexOf(".") === -1
  ) {
    document
      .querySelector(".offer-invalid-email")
      .classList.remove("invalid-input--hidden");
    offerForm.scrollIntoView();
  } else {
    document
      .querySelector(".offer-invalid-email")
      .classList.add("invalid-input--hidden");
  }

  if (phone.trim().length !== 9) {
    document
      .querySelector(".offer-invalid-phone")
      .classList.remove("invalid-input--hidden");
  } else {
    document
      .querySelector(".offer-invalid-phone")
      .classList.add("invalid-input--hidden");
  }
  console.log(model);
  e.preventDefault();
});
