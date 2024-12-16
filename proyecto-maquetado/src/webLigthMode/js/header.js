async function loadHeader() {
    try {
        // Ajusta la ruta según la ubicación de header.html
        const response = await fetch('../pages/header.html');
        if (!response.ok) throw new Error('No se pudo cargar el header');
        
        // Obtiene el contenido HTML del header
        const headerHTML = await response.text();
        
        // Inyecta el contenido en el contenedor con id="header"
        document.querySelector('.header').innerHTML = headerHTML;
    } catch (error) {
        console.error('Error al cargar el header:', error);
    }
}

// Llama a la función para cargar el header
loadHeader();
