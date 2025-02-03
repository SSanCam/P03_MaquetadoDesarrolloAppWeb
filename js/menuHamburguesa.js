document.addEventListener("DOMContentLoaded", function() {
    // Manejo de los dropdowns en dispositivos móviles
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function(event) {
            event.preventDefault();
            let menu = this.nextElementSibling;
            if (menu) {
                menu.classList.toggle("active");
            }
        });
    });

    // Manejo del menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".header-center");
    const icono = document.querySelector(".menu-toggle img"); // Referencia correcta al icono

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");

        // Cambiar el ícono cuando el menú está activo o inactivo
        if (menu.classList.contains("active")) {
            icono.src = "../media/iconos/close.svg"; // Icono de "X" cuando el menú está abierto
        } else {
            icono.src = "../media/iconos/menu-hamburguesa.svg"; // Icono normal cuando está cerrado
        }
    });
});
