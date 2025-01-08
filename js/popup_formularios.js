document.addEventListener("DOMContentLoaded", function () {
    // Asegurar que el popup está oculto al cargar la página
    document.getElementById("popup").style.display = "none";

    // Función para mostrar el popup al enviar el formulario
    function mostrarPopup(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Muestra el popup
        document.getElementById("popup").style.display = "flex";

        // Guarda en el almacenamiento de sesión que se ha enviado el formulario
        sessionStorage.setItem("popupMostrado", "true");
    }

    // Función para cerrar el popup y redirigir a la página principal
    function cerrarPopup() {
        document.getElementById("popup").style.display = "none";
        sessionStorage.removeItem("popupMostrado"); // Borra el estado del popup
        window.location.href = "../pages_lightMode/principal.html"; // Redirige a la página principal
    }

    // Verificar si el popup ya fue mostrado en la sesión actual
    if (sessionStorage.getItem("popupMostrado") === "true") {
        document.getElementById("popup").style.display = "none";
        sessionStorage.removeItem("popupMostrado");
    }

    // Asigna eventos al formulario y al botón de cierre
    document.querySelector("form").addEventListener("submit", mostrarPopup);
    document.querySelector("#popup button").addEventListener("click", cerrarPopup);
});
