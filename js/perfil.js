document.addEventListener("DOMContentLoaded", function () {
    let popupCorreo = document.getElementById("popup-correo");
    let popupEnviado = document.getElementById("popup-enviado");
    let popupEditar = document.getElementById("popup-editar"); 
    let popupGuardado = document.getElementById("popup-guardado");

    // 🔹 Función para abrir el popup de correo
    window.abrirPopupCorreo = function () {
        popupCorreo.style.display = "flex";
    };

    // 🔹 Función para cerrar el popup de correo
    window.cerrarPopupCorreo = function () {
        popupCorreo.style.display = "none";
    };

    // 🔹 Función para cerrar el popup de confirmación de correo
    window.cerrarPopupEnviado = function () {
        popupEnviado.style.display = "none";
    };

    // 🔹 Función para simular el envío del correo
    window.enviarCorreo = function (event) {
        event.preventDefault();
        popupCorreo.style.display = "none";
        popupEnviado.style.display = "flex";
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

    // 🔹 Función para guardar los cambios del perfil
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

        // Cerrar el popup de edición y mostrar mensaje de éxito sin cambiar de ventana
        popupEditar.style.display = "none";
        popupGuardado.style.display = "flex";

        // Cerrar automáticamente el popup de confirmación después de 2 segundos
        setTimeout(() => {
            popupGuardado.style.display = "none";
        }, 2000);
    };

    // 🔹 Función para cerrar el popup de confirmación de cambios guardados manualmente
    window.cerrarPopupGuardado = function () {
        popupGuardado.style.display = "none";
    };

    // Agregar el evento de submit al formulario de edición de perfil
    let formEditar = document.getElementById("form-editar");
    if (formEditar) {
        formEditar.addEventListener("submit", window.guardarEdicion);
    }
});
