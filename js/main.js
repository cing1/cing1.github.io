
const navMenu = document.querySelector('.nav');
const padToggle = document.querySelector('.pad');


padToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
});
let modal = document.getElementById('modalContact');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

alert("hla mundo");
// Navigation active state on scroll
const nav_sections = $('section');
const main_nav = $('.nav');

$(window).on('scroll', function() {
    const cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function() {
        const top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 200) {
            $(".nav ul:first li:first").addClass('active');
        }
    });
});

$(document).ready(function(){
    var ir_a = $(".desplazar");
    ir_a.click(function(evento){
    evento.preventDefault();
    $("body, html").animate(
        {scrollTop: $(this.hash).offset().top}
    );
    });
});

// Smooth scrolling using jQuery easing
// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//         $('html, body').animate({
//         scrollTop: (target.offset().top - 56)
//         }, 1000, "easeInOutExpo");
//         return false;
//     }
//     }
// });
