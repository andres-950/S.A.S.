document.addEventListener("DOMContentLoaded", () => {
    // Menú desplegable para móviles
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });

        // Cerrar el menú automáticamente al hacer clic en un enlace (móviles)
        const navLinks = mainNav.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (mainNav.classList.contains("active")) {
                    mainNav.classList.remove("active");
                }
            });
        });
    }

    // Efecto de desvanecimiento suave al aparecer secciones (Opcional interactivo)
    const sections = document.querySelectorAll(".section");
    
    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});