function procesarApadrinamiento(event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    let popup = document.getElementById("popup-confirmacion");
    if (popup) {
        popup.style.display = "flex"; // Mostrar el popup
    }
}

function cerrarPopupConfirmacion(popupId) {
    let popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none"; // Ocultar el popup
    }
}
