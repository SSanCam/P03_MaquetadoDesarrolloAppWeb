document.addEventListener("DOMContentLoaded", function () {
    // Función genérica para abrir/cerrar popups
    function togglePopup(popupId, show = true) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = show ? 'flex' : 'none';
        }
    }

    // Función para mostrar mensajes en popups de confirmación
    function mostrarMensajeConfirmacion(mensaje, popupId = "popup-confirmacion", mensajeId = "mensaje-confirmacion-texto") {
        const mensajeElemento = document.getElementById(mensajeId);
        if (mensajeElemento) {
            mensajeElemento.textContent = mensaje;
        }
        togglePopup(popupId, true);
    }

    // Abrir y cerrar popups (reutilizando funciones genéricas)
    window.abrirPopupCorreo = () => togglePopup("popup-correo");
    window.cerrarPopupCorreo = () => togglePopup("popup-correo", false);

    window.abrirPopupEditar = () => togglePopup("popup-editar");
    window.cerrarPopupEditar = () => togglePopup("popup-editar", false);

    window.cerrarPopupConfirmacion = () => togglePopup("popup-confirmacion", false);

    // Función para enviar correo
    window.enviarCorreo = function (event) {
        event.preventDefault();
        togglePopup("popup-correo", false);
        mostrarMensajeConfirmacion("Correo enviado con éxito.");
    };

    // Función para guardar cambios de perfil
    window.guardarEdicion = function (event) {
        event.preventDefault();

        const nuevoNombre = document.getElementById("nuevoNombre").value;
        const nuevaFoto = document.getElementById("nuevaFoto").files[0];

        if (nuevoNombre) {
            const perfilNombre = document.getElementById("perfilNombre");
            if (perfilNombre) {
                perfilNombre.textContent = "Nombre: " + nuevoNombre;
            }
        }

        if (nuevaFoto) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const perfilFoto = document.getElementById("perfilFoto");
                if (perfilFoto) {
                    perfilFoto.src = e.target.result;
                }
            };
            reader.readAsDataURL(nuevaFoto);
        }

        togglePopup("popup-editar", false);
        mostrarMensajeConfirmacion("Cambios guardados con éxito.");
    };

    // Vincular el evento de submit del formulario
    const formEditar = document.getElementById("form-editar");
    if (formEditar) {
        formEditar.addEventListener("submit", window.guardarEdicion);
    }
});
