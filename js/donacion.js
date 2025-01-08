// ✅ Función para abrir el popup de donación cuando se hace clic en "Dona"
function abrirPopupDonacion() {
    let popup = document.getElementById("popup-donacion");
    popup.classList.add("show");  // 🔹 Usa una clase en lugar de manipular directamente `display`
}

// ✅ Función para cerrar el popup de donación al hacer clic en "Cancelar" o "Aceptar"
function cerrarPopupDonacion() {
    let popup = document.getElementById("popup-donacion");
    popup.classList.remove("show"); // 🔹 Usa la clase para ocultarlo correctamente
    document.getElementById("form-donacion").style.display = "block";  
    document.getElementById("mensaje-confirmacion").style.display = "none";
}

// ✅ Función para procesar la donación y mostrar mensaje de éxito
function procesarDonacion(event) {
    event.preventDefault();  // Evitar recarga de la página

    // Obtener valores del formulario
    const titular = document.getElementById("titular").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const cantidad = document.getElementById("cantidad").value;

    // Verificar que los campos están completos
    if (titular && tarjeta && cvv && cantidad) {
        document.getElementById("form-donacion").style.display = "none"; // Ocultar formulario
        document.getElementById("mensaje-confirmacion").style.display = "block"; // Mostrar mensaje de éxito
    }
}

// ✅ Asegurar que el popup se oculta al cargar la página sin parpadeo
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup-donacion");
    popup.classList.remove("show"); // 🔹 Se oculta correctamente
});
