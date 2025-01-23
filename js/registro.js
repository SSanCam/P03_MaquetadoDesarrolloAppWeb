document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("registro-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario
        window.location.href = "../pages_lightMode/login.html"; // Redirige a la página de login para iniciar sesino con el nuevo registro
    });
});
