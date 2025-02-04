document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const icono = document.querySelector(".menu-toggle img");

    if (menuToggle && menuHamburguesa && icono) {
        // Asegurar que el menú está oculto al cargar la página
        menuHamburguesa.classList.remove("active");

        menuToggle.addEventListener("click", function () {
            menuHamburguesa.classList.toggle("active");

            // Cambiar el icono dependiendo del estado del menú
            if (menuHamburguesa.classList.contains("active")) {
                icono.src = "../media/iconos/MHamburguesa.svg"; // Icono de "X" cuando el menú está abierto
            } else {
                icono.src = "../media/iconos/menu-hamburguesa.svg"; // Icono normal cuando está cerrado
            }
        });
    } else {
        console.error("Error: No se encontró el botón de menú o el icono.");
    }
});
