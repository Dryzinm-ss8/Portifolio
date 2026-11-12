const elementos = document.querySelectorAll(
".hero-content, .section-container, .project-card, .tech-card, .info-card"
);

elementos.forEach((elemento) => {
    elemento.classList.add("hidden");
});

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});