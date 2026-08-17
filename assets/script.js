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

  const projects = {

  "hazi-hinam-holon": {
    name: "Hazi Hinam, Holon",
    location: "Holon",
    category: "Commercial interior",
    description: "Commercial supermarket interior featuring custom retail departments, themed architectural elements and coordinated customer circulation.",
    images: [
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
        alt: "Grocery aisle interior design at Hazi Hinam supermarket in Holon"
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
  },

  "rami-levy-checkout": {
    name: "Rami Levy checkout area",
    location: null,
    category: "Retail development",
    description: "Retail checkout area designed to improve customer flow, merchandising visibility and operational efficiency.",
    images: [
      {
        src: "assets/project-rami-levy-checkout.webp",
        alt: "Retail development project at the Rami Levy checkout area"
      }
    ]
  },

  "haviv-petah-tikva": {
    name: "Haviv Supermarket, Petah Tikva",
    location: "Petah Tikva",
    category: "Retail development",
    description: "",
    images: [
      {
        src: "assets/haviv-supermarket-wine-section.webp",
        alt: "Wine section at Haviv Supermarket in Petah Tikva with a wide selection of local and imported wines displayed on modern retail shelves."
      }
    ]
  },

  "yohananof-holon-junction": {
    name: "Yohananof, Holon Junction",
    location: "Holon Junction",
    category: "Retail development",
    description: "Produce section at Yohananof Supermarket, Holon Junction.",
    images: [
      {
        src: "assets/yohananof-supermarket-produce-section.webp",
        alt: "Fresh produce section at Yohananof Supermarket, Holon Junction branch, displaying a variety of vegetables and grocery products in a modern supermarket"
      }
    ]
  },

  "yohananof-rehovot": {
    name: "Yohananof Supermarket, Rehovot branch",
    location: "Rehovot",
    category: "Retail development",
    description: "Design and execution of key retail areas, including the wine and beer department and self-checkout zone, with a focus on functionality, product presentation, and customer flow.",
    images: [
      {
        src: "assets/yohananof-supermarket-self-checkout.webp",
        alt: "Self-checkout area at Yohananof Supermarket, Rehovot branch, equipped with Scan & Go checkout stations for fast and convenient shopping."
      },
      {
        src: "assets/yohananof-supermarket-wine-beer-house.webp",
        alt: "Wine & Beer House at Yohananof Supermarket, Rehovot branch, featuring a dedicated selection of wines, beers, and premium alcoholic beverages."
      },
      {
        src: "assets/yohananof-supermarket-wine-department.webp",
        alt: "Wine department at Yohananof Supermarket, Rehovot branch, displaying a wide selection of local and imported wines in a modern retail environment."
      }
    ]
  },

  "shefa-market": {
    name: "Shefa Market Supermarket",
    location: null,
    category: "Commercial interior",
    description: "Commercial interior design, planning, and project management for Shefa Market supermarket, focused on efficient retail layout, product presentation, and a distinctive shopping environment.",
    images: [
      {
        src: "assets/shefa-market-produce-section.webp",
        alt: "Shefa Market supermarket produce section with wooden displays, fresh fruits and vegetables, and decorative greenery."
      },
      {
        src: "assets/shefa-market-grocery-aisles.webp",
        alt: "Shefa Market supermarket interior with grocery aisles, product displays, and modern retail lighting."
      },
      {
        src: "assets/shefa-market-grocery-aisle-displays.webp",
        alt: "Shefa Market supermarket grocery aisle with organized product displays, promotional signage, and modern lighting."
      },
      {
        src: "assets/shefa-market-nuts-spices-section.webp",
        alt: "Shefa Market supermarket nuts, spices, dried fruit, and pickles section with custom displays and decorative wall graphics."
      },
      {
        src: "assets/shefa-market-retail-aisles-signage.webp",
        alt: "Shefa Market supermarket interior with organized retail aisles, product displays, overhead category signage, and linear lighting."
      },
      {
        src: "assets/shefa-market-frozen-food-section.webp",
        alt: "Shefa Market supermarket frozen food section with branded freezer displays, grocery shelving, and overhead aisle signage."
      },
      {
        src: "assets/shefa-market-grocery-shelving.webp",
        alt: "Shefa Market supermarket interior with custom grocery shelving, spice displays, overhead signage, and modern linear lighting."
      }
    ]
  },

  "hazi-hinam-fashion-homeware": {
    name: "Hazi Hinam – Fashion & Homeware Complex",
    location: null,
    category: "Commercial interior",
    description: "Commercial interior design, planning, and project management for Hazi Hinam’s fashion, accessories, home textile, and kitchenware retail complex, creating distinct departments within a cohesive shopping environment.",
    images: [
      {
        src: "assets/hazi-hinam-fashion-menswear-section.webp",
        alt: "Hazi Hinam fashion department with menswear displays and decorative wood wall design."
      },
      {
        src: "assets/hazi-hinam-accessories-section.webp",
        alt: "Hazi Hinam accessories department with custom curved ceiling design, display fixtures, and illuminated signage."
      },
      {
        src: "assets/hazi-hinam-retail-interior-design-render.webp",
        alt: "Interior design rendering for the Hazi Hinam fashion and homeware retail complex showing curved ceiling structures and lighting."
      },
      {
        src: "assets/hazi-hinam-accessories-escalator-entrance.webp",
        alt: "Hazi Hinam accessories and home design department entrance viewed from the escalator."
      },
      {
        src: "assets/hazi-hinam-kitchenware-section.webp",
        alt: "Hazi Hinam kitchenware department with cookware displays and custom decorative wall design."
      },
      {
        src: "assets/hazi-hinam-home-textile-section.webp",
        alt: "Hazi Hinam home textile and fashion department with merchandise displays and overhead category signage."
      },
      {
        src: "assets/hazi-hinam-kitchenware-mens-accessories.webp",
        alt: "Hazi Hinam retail interior featuring kitchenware and men’s accessories departments with custom display fixtures."
      },
      {
        src: "assets/hazi-hinam-accessories-home-textile.webp",
        alt: "Hazi Hinam accessories and home textile section with custom wall displays and circular pendant lighting."
      },
      {
        src: "assets/hazi-hinam-fashion-homeware-interior.webp",
        alt: "Hazi Hinam fashion and homeware retail interior with kitchenware, textile, accessories, and clothing displays."
      },
      {
        src: "assets/hazi-hinam-babies-fashion-section.webp",
        alt: "Hazi Hinam babies fashion department with children’s clothing displays, mannequins, and illuminated signage."
      },
      {
        src: "assets/hazi-hinam-womens-lingerie-section.webp",
        alt: "Hazi Hinam women’s lingerie section with wall-mounted merchandise displays and decorative fashion graphics."
      }
    ]
  },

  "hazi-hinam-checkout-area": {
    name: "Hazi Hinam – Checkout Area",
    location: null,
    category: "Commercial interior",
    description: "Commercial interior design, planning, and project management for the Hazi Hinam supermarket checkout area, featuring custom checkout counters, branded structures, and an organized customer flow.",
    images: [
      {
        src: "assets/hazi-hinam-checkout-area.webp",
        alt: "Hazi Hinam supermarket checkout area with custom checkout counters, branded structures, and retail displays."
      }
    ]
  },

  "hazi-hinam-refrigerated-area-ceiling": {
    name: "Hazi Hinam – Refrigerated Area Ceiling Design",
    location: null,
    category: "Commercial interior",
    description: "Ceiling design, planning, and project management for the Hazi Hinam supermarket refrigerated area, featuring custom architectural graphics and integrated lighting to define the retail space.",
    images: [
      {
        src: "assets/hazi-hinam-refrigerated-area-ceiling.webp",
        alt: "Hazi Hinam supermarket refrigerated area with custom decorative ceiling design and integrated lighting."
      },
      {
        src: "assets/hazi-hinam-refrigerated-area-overview.webp",
        alt: "Hazi Hinam supermarket refrigerated area viewed from above, showing custom ceiling design, refrigerated displays, and retail layout."
      }
    ]
  },

  "hazi-hinam-em-hamoshavot": {
    name: "Hazi Hinam – Em HaMoshavot",
    location: "Em HaMoshavot",
    category: "Commercial interior",
    description: "Commercial interior design, planning, and project management for the Hazi Hinam Em HaMoshavot supermarket, featuring themed retail departments, custom product displays, branded installations, and immersive decorative environments.",
    images: [
      {
        src: "assets/hazi-hinam-em-hamoshavot-personal-care.webp",
        alt: "Hazi Hinam Em HaMoshavot personal care aisle with custom branded displays and decorative product installations."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-baby-care.webp",
        alt: "Hazi Hinam Em HaMoshavot baby care section with custom green shelving, branded displays, and decorative retail elements."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-space-themed-aisle.webp",
        alt: "Hazi Hinam Em HaMoshavot themed grocery aisle with astronaut figures, rockets, planets, and space-inspired ceiling design."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-canned-food-aisle.webp",
        alt: "Hazi Hinam Em HaMoshavot canned food aisle with nautical-themed shelving, boats, lighthouse elements, and custom signage."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-confectionery-aisle.webp",
        alt: "Hazi Hinam Em HaMoshavot confectionery aisle with castle-inspired displays, colorful architectural elements, and branded shelving."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-tropical-drinks-aisle.webp",
        alt: "Hazi Hinam Em HaMoshavot beverage aisle with tropical surf-themed displays, sculptural figures, and custom shelving."
      },
      {
        src: "assets/hazi-hinam-em-hamoshavot-surf-themed-aisle.webp",
        alt: "Hazi Hinam Em HaMoshavot beverage aisle with wave installation, surfing figures, themed ceiling graphics, and product displays."
      }
    ]
  },

  "hazi-hinam-rishon-lezion": {
    name: "Hazi Hinam – Rishon LeZion",
    location: "Rishon LeZion",
    category: "Commercial interior",
    description: "Commercial interior design, planning, and project management for the Hazi Hinam Rishon LeZion supermarket, featuring custom-designed retail aisles, themed product displays, branded shelving, and distinctive decorative environments.",
    images: [
      {
        src: "assets/hazi-hinam-rishon-lezion-specialty-food-aisle.webp",
        alt: "Hazi Hinam Rishon LeZion specialty food aisle with colorful custom shelving and oversized food-themed decorative elements."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-cereal-aisle.webp",
        alt: "Hazi Hinam Rishon LeZion cereal aisle with custom themed shelving and decorative product displays."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-canned-food-aisle.webp",
        alt: "Hazi Hinam Rishon LeZion canned food aisle with nautical-themed shelving, boats, barrels, and lighthouse elements."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-confectionery-aisle.webp",
        alt: "Hazi Hinam Rishon LeZion confectionery aisle with castle-inspired shelving and decorative architectural elements."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-household-products.webp",
        alt: "Hazi Hinam Rishon LeZion household products section with custom arched shelving and oversized product-themed decorations."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-promotions-section.webp",
        alt: "Hazi Hinam Rishon LeZion promotions section with custom retail displays, overhead directional signage, and themed decorative elements."
      },
      {
        src: "assets/hazi-hinam-rishon-lezion-specialty-food-aisle-2.webp",
        alt: "Hazi Hinam Rishon LeZion specialty food aisle with colorful custom shelving and oversized food-themed installations."
      }
    ]
  },

  "yohananof-ashdod-checkout": {
    name: "Yohananof – Ashdod Checkout Area",
    location: "Ashdod",
    category: "Retail development",
    description: "Design and implementation of the checkout area at the Yohananof Ashdod branch, including custom checkout counters, self-service terminals, handheld scanner stations, branded structures, and overhead signage.",
    images: [
      {
        src: "assets/yohananof-ashdod-self-checkout-station.webp",
        alt: "Yohananof Ashdod self-checkout station with custom red and gold branded design and handheld scanner terminals."
      },
      {
        src: "assets/yohananof-ashdod-checkout-area.webp",
        alt: "Yohananof Ashdod checkout area with custom checkout counters, overhead signage, and branded retail fixtures."
      },
      {
        src: "assets/yohananof-ashdod-smart-market-checkout.webp",
        alt: "Yohananof Ashdod Smart Market checkout area with self-service terminals and custom branded fixtures."
      },
      {
        src: "assets/yohananof-ashdod-checkout-zone.webp",
        alt: "Wide view of the Yohananof Ashdod checkout zone with custom counters, exit signage, and retail displays."
      },
      {
        src: "assets/yohananof-ashdod-handheld-scanner-station.webp",
        alt: "Yohananof Ashdod handheld scanner station with integrated charging docks and custom branded structure."
      }
    ]
  },

  "yohananof-modiin": {
    name: "Yohananof – Modi'in Supermarket Interior",
    location: "Modi'in",
    category: "Retail development",
    description: "Design and implementation of the supermarket interior at the Yohananof Modi'in branch, including custom shelving, branded category displays, aisle structures, product presentation, and directional signage.",
    images: [
      {
        src: "assets/yohananof-modiin-supermarket-interior.webp",
        alt: "Yohananof Modi'in supermarket interior with custom shelving, branded category displays, aisle structures, and overhead signage."
      }
    ]
  },

  "shuk-hair-ramot": {
    name: "Shuk Ha'ir – Ramot Branch",
    location: "Ramot",
    category: "Retail development",
    description: "Design and implementation of a specialty food display area at the Shuk Ha'ir Ramot branch, featuring custom counters, wood-inspired finishes, integrated product displays, lighting, and branded overhead signage.",
    images: [
      {
        src: "assets/shuk-hair-ramot-specialty-food-display.webp",
        alt: "Shuk Ha'ir Ramot specialty food display with custom counters, wood-inspired finishes, integrated lighting, and overhead signage."
      },
      {
        src: "assets/shuk-hair-ramot-specialty-food-counter.webp",
        alt: "Shuk Ha'ir Ramot custom specialty food counter with integrated displays, branded panels, and suspended signage."
      }
    ]
  },

  "bol-market-minimarket": {
    name: "Bol Market – Minimarket Design & Execution",
    location: null,
    category: "Commercial interior",
    description: "Design and execution of Bol Market minimarket interiors, including retail shelving, produce displays, specialty food areas, customer service counters, lighting, signage, and branded visual elements.",
    images: [
      {
        src: "assets/bol-market-minimarket-retail-aisles.webp",
        alt: "Bol Market minimarket interior with branded retail aisles, custom shelving, overhead signage, and integrated lighting."
      },
      {
        src: "assets/bol-market-minimarket-shelving-design.webp",
        alt: "Bol Market custom retail shelving and aisle design with integrated product displays and branded signage."
      },
      {
        src: "assets/bol-market-customer-service-area.webp",
        alt: "Bol Market customer service area with custom counter, wood-finish branding, and adjacent fresh produce department."
      },
      {
        src: "assets/bol-market-produce-department.webp",
        alt: "Bol Market fresh produce department with custom display units, suspended signage, and integrated retail lighting."
      },
      {
        src: "assets/bol-market-modern-retail-interior.webp",
        alt: "Bol Market modern minimarket interior with custom shelving, dark ceiling, integrated lighting, and promotional displays."
      },
      {
        src: "assets/bol-market-specialty-food-section.webp",
        alt: "Bol Market specialty food section with custom counters, wall displays, integrated lighting, and product graphics."
      },
      {
        src: "assets/bol-market-fresh-produce-section.webp",
        alt: "Bol Market fresh produce section with custom fruit and vegetable displays, overhead signage, and illuminated retail aisles."
      }
    ]
  }

};

  

  const projectCarousels = {

  "shared-projects": [
    "rami-levy-checkout",
    "haviv-petah-tikva",
    "yohananof-holon-junction",
    "yohananof-rehovot",
    "hazi-hinam-checkout-area",
    "hazi-hinam-refrigerated-area-ceiling",
    "yohananof-modiin",
    "shuk-hair-ramot"
  ],

  "hazi-hinam-holon": [
    "hazi-hinam-holon"
  ],

  "shefa-market": [
    "shefa-market"
  ],

  "hazi-hinam-fashion-homeware": [
    "hazi-hinam-fashion-homeware"
  ],

  "hazi-hinam-em-hamoshavot": [
    "hazi-hinam-em-hamoshavot"
  ],

  "hazi-hinam-rishon-lezion": [
    "hazi-hinam-rishon-lezion"
  ],

  "yohananof-ashdod-checkout": [
    "yohananof-ashdod-checkout"
  ],

  "bol-market-minimarket": [
    "bol-market-minimarket"
  ]

};

  function buildCarouselSlides(projectIds) {
  return projectIds.flatMap((projectId) => {
    const project = projects[projectId];

    if (!project) {
      console.warn(`Project not found: ${projectId}`);
      return [];
    }

    return project.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      category: project.category,
      title: project.name,
      description: project.description
    }));
  });
}

  const generatedProjectSlides = {};

Object.entries(projectCarousels).forEach(([carouselId, projectIds]) => {
  generatedProjectSlides[carouselId] = buildCarouselSlides(projectIds);
});
  

  const carousels = document.querySelectorAll("[data-project-carousel]");

  carousels.forEach((carousel) => {

  const carouselId = carousel.dataset.projectCarousel;
const slides = generatedProjectSlides[carouselId];

    if (!slides || slides.length === 0) return;

    const image = carousel.querySelector("[data-carousel-image]");
    const previousButton = carousel.querySelector(".project-carousel-prev");
    const nextButton = carousel.querySelector(".project-carousel-next");
    const currentCounter = carousel.querySelector("[data-carousel-current]");
    const totalCounter = carousel.querySelector("[data-carousel-total]");

    const categoryElement = carousel.querySelector("[data-carousel-category]");
const titleElement = carousel.querySelector("[data-carousel-title]");
const descriptionElement = carousel.querySelector("[data-carousel-description]");

    let currentIndex = 0;

    totalCounter.textContent = String(slides.length);

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;


      image.src = slides[currentIndex].src;
      image.alt = slides[currentIndex].alt;

      if (categoryElement) {
  categoryElement.textContent = slides[currentIndex].category;
}

if (titleElement) {
  titleElement.textContent = slides[currentIndex].title;
}

if (descriptionElement) {
  descriptionElement.textContent = slides[currentIndex].description;
}

      currentCounter.textContent = String(currentIndex + 1);
    };

     showSlide(0);

    previousButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

  });

});
