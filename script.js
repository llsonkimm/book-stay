const navbarToggler = document.getElementById("navbar-toggler");
const navbar = document.querySelector(".navbar");
const custom = document.querySelector(".custom");

navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
    custom.classList.toggle("active");
});
