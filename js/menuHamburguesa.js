document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const icono = document.querySelector(".menu-toggle img");

    // Asegurarse de que el menú está oculto al cargar la página
    menuHamburguesa.classList.remove("active");

    menuToggle.addEventListener("click", function () {
        menuHamburguesa.classList.toggle("active");

        // Cambiar el icono cuando el menú está activo o inactivo
        if (menuHamburguesa.classList.contains("active")) {
            icono.src = "../media/iconos/MHamburguesa.png"; // Icono de "X" cuando el menú está abierto
        } else {
            icono.src = "../media/iconos/MHamburguesa.png"; // Icono normal cuando está cerrado
        }
    });
});
