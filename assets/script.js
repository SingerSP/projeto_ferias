const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let indiceAtual = 0;

function mostrarSlide(indice) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[indice].classList.add("ativo");
}

prevBtn.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    mostrarSlide(indiceAtual);
});

nextBtn.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
});

// Mostrar o primeiro slide ao carregar a página
mostrarSlide(indiceAtual);

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
}, 3000);

