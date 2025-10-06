// Carrusel automático
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("carrusel-slide");
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // cambia cada 4 segundos
}

// Control manual con puntos
const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    currentSlide(i + 1);
  });
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Botón “Ir arriba”
const btnArriba = document.getElementById("btnArriba");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
}

btnArriba.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
