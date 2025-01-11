document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup-confirmacion");
    let formulario = document.getElementById("formulario-acogida"); // 🔹 Selecciona el formulario correcto
    let botonCerrar = document.querySelector("#popup-confirmacion button");

    // 🔹 Asegurar que el popup está oculto al cargar la página
    if (popup) {
        popup.style.display = "none"; 
    }

    // 🔹 Función para mostrar el popup al enviar el formulario
    function mostrarPopup(event) {
        event.preventDefault(); // Evita el envío real del formulario

        if (popup) {
            popup.style.display = "flex"; // Mostrar popup
            formulario.reset(); // Limpiar formulario
        }
    }

    // 🔹 Función para cerrar el popup
    function cerrarPopupConfirmacion() {
        if (popup) {
            popup.style.display = "none"; // Ocultar popup
        }
    }

    // 🔹 Asignar eventos al formulario y al botón de cierre
    if (formulario) {
        formulario.addEventListener("submit", mostrarPopup);
    }

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarPopupConfirmacion);
    }

    // 🔹 Permitir cerrar el popup haciendo clic fuera del contenido
    if (popup) {
        popup.addEventListener("click", function (e) {
            if (e.target === popup) {
                cerrarPopupConfirmacion();
            }
        });
    }
});
