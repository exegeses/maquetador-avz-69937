const boton = document.querySelector('header img[alt="menu"]');
const nav = document.querySelector('header nav');

let estado = 'up';
boton.addEventListener(
    'click',
    function (){
        nav.classList.toggle('desplegado');
        if( estado == 'up' ){
            boton.src = 'imgs/close-w.png';
            estado = 'down';
        }
        else{
            boton.src = 'imgs/menu-w.png';
            estado = 'up';
        }
    }
);