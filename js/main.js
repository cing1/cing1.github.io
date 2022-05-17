// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
// menu hide-visible in responsive
const navMenu = document.querySelector('.nav');
const padToggle = document.querySelector('.pad');
padToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
});
// scroll reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 100
});
ScrollReveal().reveal('.titulo', {
    delay: 200,
    origin: 'left'
});
ScrollReveal().reveal('.card', {
    delay: 100,
    origin: 'bottom',
    interval: 100
});
ScrollReveal().reveal('.proj-card', {
    delay: 100,
    origin: 'bottom',
    interval: 100
});
ScrollReveal().reveal('.blog-card', {
    delay: 100,
    origin: 'bottom',
    interval: 100
});
ScrollReveal().reveal('.contact-card', {
    delay: 100,
    origin: 'left',
    interval: 100
});
ScrollReveal().reveal('.home-text', {
    delay: 100,
    origin: 'zoom'
});