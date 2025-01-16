document.addEventListener("DOMContentLoaded", function () {
    // Toggle para el menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("menu-active");
        });
    }

    // Ajustar texto para evitar desbordes
    const adjustText = () => {
        const textElements = document.querySelectorAll(".responsive-text");
        textElements.forEach(element => {
            element.style.wordWrap = "break-word";
            element.style.overflowWrap = "break-word";
        });
    };
    adjustText();

    // Listener para cambios en el tamaño de pantalla
    window.addEventListener("resize", () => {
        adjustText();
    });
});
