const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".botones");

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("nav-menu_visible");
});
