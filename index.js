const navToggle = document.querySelector(".menu__nav__toggle");
const navList = document.querySelector(".menu__nav__list");

navToggle.addEventListener("click", () => {
    navList.classList.toggle(".menu__nav__list-visible");
});