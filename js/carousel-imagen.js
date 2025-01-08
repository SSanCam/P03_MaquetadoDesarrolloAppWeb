document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;
    let direction = 1; // 1 para avanzar, -1 para retroceder

    const moveToSlide = (index) => {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = 'translateX(-' + slideWidth * index + 'px)';
        currentIndex = index;
    };

    const startCarousel = () => {
        setInterval(() => {
            if (currentIndex >= slides.length - 1) {
                direction = -1; // Cambia la dirección a retroceder
            } else if (currentIndex <= 0) {
                direction = 1; // Cambia la dirección a avanzar
            }

            moveToSlide(currentIndex + direction);
        }, 2000); // Cambia de imagen cada 3 segundos
    };

    startCarousel();
});
