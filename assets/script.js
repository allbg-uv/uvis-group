const m = document.querySelector(".menu");
const n = document.querySelector(".header nav");

if (m && n) {
  m.onclick = () => n.classList.toggle("open");
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {

  const projectSlides = {

    "hazi-hinam": [
      {
        src: "assets/project-hazi-hinam-holon-main.webp",
        alt: "Commercial supermarket interior at Hazi Hinam in Holon"
      },
      {
        src: "assets/project-hazi-hinam-holon-dairy-section.webp",
        alt: "Dairy and cheese section at Hazi Hinam supermarket in Holon"
      },
      {
        src: "assets/project-hazi-hinam-holon-aisle.webp",
        alt: "Main retail aisle at Hazi Hinam supermarket in Holon"
      },
      {
        src: "assets/project-hazi-hinam-holon-granola-dried-fruits-aisle.webp",
        alt: "Granola and dried fruits aisle at Hazi Hinam supermarket"
      },
      {
        src: "assets/project-hazi-hinam-holon-grocery-aisle-design.webp",
        alt: "Grocery aisle design at Hazi Hinam supermarket in Holon"
      },
      {
        src: "assets/project-hazi-hinam-holon-organic-food-aisle.webp",
        alt: "Organic food aisle at Hazi Hinam supermarket in Holon"
      },
      {
        src: "assets/project-hazi-hinam-holon-retail-street-design.webp",
        alt: "Retail street inspired interior at Hazi Hinam supermarket"
      }
    ]

  };

  const carousels = document.querySelectorAll("[data-project-carousel]");

  carousels.forEach((carousel) => {

    const projectName = carousel.dataset.projectCarousel;
    const slides = projectSlides[projectName];

    if (!slides || slides.length === 0) return;

    const image = carousel.querySelector("[data-carousel-image]");
    const previousButton = carousel.querySelector(".project-carousel-prev");
    const nextButton = carousel.querySelector(".project-carousel-next");
    const currentCounter = carousel.querySelector("[data-carousel-current]");
    const totalCounter = carousel.querySelector("[data-carousel-total]");

    let currentIndex = 0;

    totalCounter.textContent = String(slides.length);

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      image.src = slides[currentIndex].src;
      image.alt = slides[currentIndex].alt;

      currentCounter.textContent = String(currentIndex + 1);
    };

    previousButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

  });

});
