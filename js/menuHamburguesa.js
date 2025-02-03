function toggleMenu() {
    const menu = document.querySelector('.header-center');
    menu.classList.toggle('active');

    const toggle = document.querySelector('.menu-toggle img');
    if (menu.classList.contains('active')) {
        icono.src = "../media/iconos/close.svg"; // Cambiar a icono "X" cuando se abre
    } else {
        icono.src = "../media/iconos/menu-hamburguesa.svg"; // Volver al icono normal
    }
}
