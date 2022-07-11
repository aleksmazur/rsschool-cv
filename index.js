const humburger = document.querySelector('.nav-mobile');
const nav = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
    if (overlay.classList.contains('overlay-active') && e.target != nav && e.target != humburger) {
        console.log(e.target);
        closeMobileMenu();
    }
})

function openMobileMenu() {
    console.log('openMenu');
    nav.classList.add('nav-list-mobile');
    nav.style.display = "flex";
    overlay.classList.add('overlay-active');
}

function closeMobileMenu() {
    console.log('closeMenu');
    nav.classList.remove('nav-list-mobile');
    nav.style.display = "";
    overlay.classList.remove('overlay-active');
}

humburger.addEventListener('click', openMobileMenu);
navItems.forEach(item => {
    item.addEventListener('click', closeMobileMenu)
});


