function toggleMenu() {
    const menu = document.querySelector('.header-center');
    menu.classList.toggle('active');

    const toggle = document.querySelector('.menu-toggle');
    toggle.classList.toggle('menu-active');
}
