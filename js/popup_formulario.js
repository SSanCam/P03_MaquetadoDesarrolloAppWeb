document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");
    let formulario = document.querySelector("form");
    let botonCerrar = document.querySelector("#popup button");

    // Asegurar que el popup está oculto al cargar la página
    if (popup) {
        popup.style.display = "none";
    }

    // Función para mostrar el popup al enviar el formulario
    function mostrarPopup(event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        if (popup) {
            popup.style.display = "flex"; // Muestra el popup
        }

        sessionStorage.setItem("popupMostrado", "true"); // Guarda estado del popup
    }

    // Función para cerrar el popup
    function cerrarPopup() {
        if (popup) {
            popup.style.display = "none"; // Oculta el popup
        }

        sessionStorage.removeItem("popupMostrado"); // Borra el estado guardado
    }

    // Verificar si el popup ya fue mostrado en la sesión y ocultarlo
    if (sessionStorage.getItem("popupMostrado") === "true") {
        if (popup) {
            popup.style.display = "none";
        }
        sessionStorage.removeItem("popupMostrado");
    }

    // Asignar eventos al formulario y al botón de cierre
    if (formulario) {
        formulario.addEventListener("submit", mostrarPopup);
    }

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarPopup);
    }

    // Permitir cerrar el popup haciendo clic fuera del contenido
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            cerrarPopup();
        }
    });
});
