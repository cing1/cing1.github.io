

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 100
});
// ScrollReveal().reveal('.titulo', {
//     delay: 200,
//     origin: 'left'
// });
ScrollReveal().reveal('.card-services', {
    delay: 100,
    origin: 'bottom',
    interval: 100
});
ScrollReveal().reveal('.card-proj', {
    delay: 100,
    origin: 'bottom',
    interval:  100
});
ScrollReveal().reveal('.blog-card', {
    delay: 100,
    origin: 'bottom',
    interval: 100
});
// ScrollReveal().reveal('.contact-card', {
//     delay: 100,
//     origin: 'left',
//     interval: 100
// });
ScrollReveal().reveal('.home-text', {
    delay: 100,
    origin: 'zoom'
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

// // box modal
// const buttonCard = document.querySelector('.btn-card');
// buttonCard.addEventListener('click', () => {
//     modalView.classList.toggle('hide');
// })

const modalView = document.querySelector('.box-modal');
var closeBox = document.getElementById('close-box');
closeBox.addEventListener('click', () => {
    modalView.classList.toggle('hide');
})





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





