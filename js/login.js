document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("login-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario
        window.location.href = "perfil.html"; // Redirige a la página de perfil
    });
});
