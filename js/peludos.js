document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todas las imágenes dentro de las tarjetas
    document.querySelectorAll('.imagen-container img').forEach(img => {
        img.addEventListener('click', function () {
            // Encuentra el modal asociado a esta imagen
            let modal = this.closest('.tarjeta').querySelector('.modal');
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    // Cerrar el modal cuando se haga clic en la 'X'
    document.querySelectorAll('.cerrar').forEach(cerrarBtn => {
        cerrarBtn.addEventListener('click', function () {
            this.closest('.modal').style.display = "none";
        });
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', function (e) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
