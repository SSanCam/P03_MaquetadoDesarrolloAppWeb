async function loadFooter() {
    try {
        const response = await fetch('../pages/footer.html'); // Ajusta la ruta si es necesario
        if (!response.ok) throw new Error('No se pudo cargar el footer');
        const footerHTML = await response.text();
        document.querySelector('.footer').innerHTML = footerHTML; // Inyecta el contenido
    } catch (error) {
        console.error('Error al cargar el footer:', error);
    }
}

// Llama a la función al cargar la página
loadFooter();
