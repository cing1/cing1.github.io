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
