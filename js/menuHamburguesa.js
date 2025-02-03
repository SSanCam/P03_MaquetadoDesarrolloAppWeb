document.addEventListener("DOMContentLoaded", function() {
    // Manejo del menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".header-center");
    const icono = document.querySelector(".menu-toggle img"); // Referencia correcta al icono

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");

        // Cambiar el ícono cuando el menú está activo o inactivo
        if (menu.classList.contains("active")) {
            icono.src = "../media/iconos/MHamburguesa.png"; // Icono de "X" cuando el menú está abierto
        } else {
            icono.src = "../media/iconos/MHamburguesa.png"; // Icono normal cuando está cerrado
        }
    });
});
