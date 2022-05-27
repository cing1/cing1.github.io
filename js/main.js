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
    padToggle.classList.toggle('bx-x');
});
// menu content hide-visible in responsive
const hideContent = document.querySelector('.libList');
const hideIcon = document.querySelector('.hide');
hideIcon.addEventListener('click', () => {
    hideContent.classList.toggle('contentHide');
    hideIcon.classList.toggle('bx-chevron-up');
});
// menu state
// var btnContainer = document.getElementById("nav");
// var menus = btnContainer.getElementsByClassName("menu");
// for (var i = 0; i < menus.length; i++) {
//   menus[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// };
// lib content state
// var navList = document.getElementById("ulList");
// var classList = navList.getElementsByClassName("list");
// var fileContainer = navList.getElementsByClassName("fileContent")
// for (var i = 0; i < classList.length; i++) {
//     // console.log("i:   " + i);
//   classList[i].addEventListener("click", function() {
//     var currentClass = document.getElementsByClassName("activeList");
//     currentClass[0].className = currentClass[0].className.replace(" activeList", "");
//     this.className += " activeList";
//     var currentClass2 = document.getElementsByClassName("activeFileContent");
//     console.log(i);
//     currentClass2[0].className = currentClass2[0].className.replace(" activeFileContent", "");
//     // fileContainer[i].className = fileContainer[i].className.add(" activeFileContent");
    
//   });
// };







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