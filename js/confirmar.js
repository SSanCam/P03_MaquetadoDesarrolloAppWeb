function cerrarPopupConfirmacion(popupId) {
    let popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Agregar eventos de clic a los botones de confirmación
    let botonesConfirmacion = document.querySelectorAll(".boton-confirmacion");
    botonesConfirmacion.forEach(boton => {
        boton.addEventListener("click", function () {
            let popupId = this.getAttribute("data-popup-id");
            cerrarPopupConfirmacion(popupId);
        });
    });
});