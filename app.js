let btn = document.getElementsByClassName('btn')[0];
let menu = document.getElementsByClassName('menu')[0];
let overlay = document.getElementsByClassName('overlay')[0];

const closeMenu = () => {
    overlay.style.display = 'none';
    menu.classList.remove('menu-animation');
}

btn.addEventListener('click', event => {
    menu.classList.add('menu-animation');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', closeMenu);