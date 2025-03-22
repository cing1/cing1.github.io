

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
});
// ScrollReveal().reveal('.titulo', {
//     delay: 200,
//     origin: 'left'
// });
ScrollReveal().reveal('.card-services', {
    delay: 100,
    origin: 'bottom',
    interval: 100,
    reset: true
});
ScrollReveal().reveal('.card-proj', {
    delay: 100,
    origin: 'bottom',
    interval:  100,
    reset: true
});
ScrollReveal().reveal('.blog-card', {
    delay: 100,
    origin: 'bottom',
    interval: 100,
    reset: true
});

ScrollReveal().reveal('.home-text', {
    delay: 100,
    origin: 'zoom',
    reset: true
});



// preloader
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//     loader.style.display = "none";
// });

// darkMode
function darkMode(){
    const getDark = document.querySelector('.dark-modei');
    const darkMode = document.querySelector('body');
    getDark.classList.toggle('bxs-sun');
    darkMode.classList.toggle('darkMode');
}
// menu hide-visible in responsive
const navMenu = document.querySelector('.nav');
const padToggle = document.querySelector('.pad');
padToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
    padToggle.classList.toggle('bx-x');
});




// menu state
var btnContainer = document.getElementById("nav");
var menus = btnContainer.getElementsByClassName("menu");
for (var i = 0; i < menus.length; i++) {
  window.addEventListener("scroll", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
        for(var j=1; j < current.length; j++) {
            current[j].className = current[j].className.replace(" active", "");
        };
     current[0].className = current[0].className.replace(" active", "");
    }
    const y = window.scrollY;
    if(y<window.innerHeight){
        menus[0].className += " active";
    }
    if(y>window.innerHeight - 80 && y<window.innerHeight+700){
        menus[1].className += " active";
    }
    if(y>window.innerHeight+700 && y<window.innerHeight + 900){
        menus[2].className += " active";
    }
    if(y>window.innerHeight + 1000 && y<4050){
        menus[3].className += " active";
    }
});
};








