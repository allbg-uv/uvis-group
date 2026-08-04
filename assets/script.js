const m=document.querySelector('.menu'),n=document.querySelector('.header nav');if(m&&n)m.onclick=()=>n.classList.toggle('open');document.getElementById('year').textContent=new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-project-carousel]");

  if (!carousel) return;

  const image = carousel.querySelector("[data-carousel-image]");
  const previousButton = carousel.querySelector(".project-carousel-prev");
  const nextButton = carousel.querySelector(".project-carousel-next");
  const currentCounter = carousel.querySelector("[data-carousel-current]");
  const totalCounter = carousel.querySelector("[data-carousel-total]");

  const slides = [
    {
      src: "assets/project-hazi-hinam-holon-main.webp",
      alt: "Commercial supermarket interior at Hazi Hinam in Holon"
    },
    {
      src: "assets/project-hazi-hinam-holon-overview.webp",
      alt: "Wide overview of the Hazi Hinam supermarket interior in Holon"
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
  ];

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
