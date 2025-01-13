window.addEventListener("resize", function () {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    if (screenWidth < 600) {
        document.querySelector("header").style.fontSize = "0.9rem";
    } else {
        document.querySelector("header").style.fontSize = "1.2rem";
    }

    if (screenHeight > 1000) {
        document.querySelector("footer").style.height = "10vh";
    }
});
