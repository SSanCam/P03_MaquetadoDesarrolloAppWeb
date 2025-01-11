// Función para abrir el popup de donación cuando se hace clic en "Dona"
function abrirPopupDonacion() {
    let popup = document.getElementById("popup-donacion");
    if (popup) {
        popup.classList.add("show");  
    }
}

// Función para cerrar el popup de donación al hacer clic en "Cancelar" o "Aceptar"
function cerrarPopupDonacion() {
    let popup = document.getElementById("popup-donacion");
    if (popup) {
        popup.classList.remove("show"); 
        let form = document.getElementById("form-donacion");
        if (form) form.reset(); 
        let mensaje = document.getElementById("mensaje-confirmacion");
        if (mensaje) mensaje.style.display = "none"; 
        if (form) form.style.display = "block"; 
    }
}

// Función para procesar la donación y mostrar mensaje de éxito
function procesarDonacion(event) {
    event.preventDefault();  

    const titular = document.getElementById("titular")?.value;
    const tarjeta = document.getElementById("tarjeta")?.value;
    const cvv = document.getElementById("cvv")?.value;
    const cantidad = document.getElementById("cantidad")?.value;

    if (titular && tarjeta && cvv && cantidad) {
        let form = document.getElementById("form-donacion");
        let mensaje = document.getElementById("mensaje-confirmacion");
        if (form) form.style.display = "none"; 
        if (mensaje) mensaje.style.display = "block"; 
    }
}

// Asegurar que el popup se oculta al cargar la página sin parpadeo
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup-donacion");
    if (popup) popup.classList.remove("show"); 
});

// Cerrar el popup al hacer clic fuera de él
document.addEventListener("click", function (event) {
    let popup = document.getElementById("popup-donacion");
    if (popup && event.target === popup) {
        cerrarPopupDonacion();
    }
});
