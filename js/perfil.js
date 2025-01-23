document.addEventListener("DOMContentLoaded", function () {
    let popupCorreo = document.getElementById("popup-correo");
    let popupEnviado = document.getElementById("popup-enviado");
    let popupEditar = document.getElementById("popup-editar");
    let popupGuardado = document.getElementById("popup-guardado");
    let popupConfirmacion = document.getElementById("popup-confirmacion"); // Popup genérico de confirmación

    // 🔹 Función para abrir el popup de correo
    window.abrirPopupCorreo = function () {
        popupCorreo.style.display = "flex";
    };

    // 🔹 Función para cerrar el popup de correo
    window.cerrarPopupCorreo = function () {
        popupCorreo.style.display = "none";
    };

    // 🔹 Función para simular el envío del correo y mostrar popup de confirmación
    window.enviarCorreo = function (event) {
        event.preventDefault();
        popupCorreo.style.display = "none";
        mostrarPopupConfirmacion("Correo enviado con éxito.");
    };

    // =========================
    // POPUP DE EDICIÓN DE PERFIL
    // =========================

    // 🔹 Función para abrir el popup de edición
    window.abrirPopupEditar = function () {
        popupEditar.style.display = "flex";
    };

    // 🔹 Función para cerrar el popup de edición
    window.cerrarPopupEditar = function () {
        popupEditar.style.display = "none";
    };

    // 🔹 Función para guardar los cambios del perfil y mostrar popup de confirmación
    window.guardarEdicion = function (event) {
        event.preventDefault();

        let nuevoNombre = document.getElementById("nuevoNombre").value;
        let nuevaFoto = document.getElementById("nuevaFoto").files[0];

        if (nuevoNombre) {
            let perfilNombre = document.getElementById("perfilNombre");
            if (perfilNombre) {
                perfilNombre.textContent = "Nombre: " + nuevoNombre;
            }
        }

        if (nuevaFoto) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let perfilFoto = document.getElementById("perfilFoto");
                if (perfilFoto) {
                    perfilFoto.src = e.target.result;
                }
            };
            reader.readAsDataURL(nuevaFoto);
        }

        // Cerrar el popup de edición
        popupEditar.style.display = "none";

        // Mostrar popup de confirmación
        mostrarPopupConfirmacion("Cambios guardados con éxito.");
    };

    // 🔹 Función para mostrar el popup genérico de confirmación
    function mostrarPopupConfirmacion(mensaje) {
        let mensajeConfirmacion = document.getElementById("mensaje-confirmacion-texto");
        if (mensajeConfirmacion) {
            mensajeConfirmacion.textContent = mensaje;
        }
        popupConfirmacion.style.display = "flex";
    }

    // 🔹 Función para cerrar el popup de confirmación
    window.cerrarPopupConfirmacion = function () {
        popupConfirmacion.style.display = "none";
    };

    // Agregar el evento de submit al formulario de edición de perfil
    let formEditar = document.getElementById("form-editar");
    if (formEditar) {
        formEditar.addEventListener("submit", window.guardarEdicion);
    }
});
