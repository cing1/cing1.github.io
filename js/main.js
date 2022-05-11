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
// contact whatsapp
/** 
 * Listen for click event across the document & trigger on
 * buttons that have a data-url attribute.
 */
 document.addEventListener('click', function (event) {
	if (event.target.matches('[data-prototype-url]')) {
    var button = event.target;
		var buttonURL = button.getAttribute('data-prototype-url');
    window.location.href = buttonURL;
    console.log(button.textContent + ' clicked');
	}
}, false);

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
