//Apparition des titres en fade-in

window.onload = () => {
  let hiddenTitles = document.querySelectorAll('h2 span.hidden, h3 span.hidden');

  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  hiddenTitles.forEach(function(title) {
      observer.observe(title);
  });
}


// Parallax logo (le titre)
let parallaxLogo = document.querySelector('.parallaxLogo');
const banner = document.querySelector('.banner');
const header = document.querySelector('#masthead');
const HighLimit = banner.offsetHeight + header.offsetHeight;
let isScrolling; 
let scrollPosition = 0; 
let actualPosition;

window.addEventListener('scroll', () => {
    // Réinitialise le délai si le défilement est en cours
    window.clearTimeout(isScrolling);

    // Position de défilement verticale
    scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    parallaxLogo.classList.remove("float");
    
    // Ajustement de la position verticale du logo en fonction de la position de défilement dans la page
    parallaxLogo.style.transform = `translate(0px, ${scrollPosition / documentHeight * 1000}px)`;

   
    if (scrollPosition === 0) {
          parallaxLogo.classList.add("float");
    }
    if (scrollPosition === HighLimit) {
      actualPosition = scrollPosition
    }
});

// Gestionnaire d'événements pour le redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    scrollPosition = window.scrollY;
});


//Carousel

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
});

// Nuages

let nuages = document.querySelector('.nuages');
const startCloud = 1548;
const endCloud = 2458;

window.addEventListener('scroll', () => {
  // Obtenez la position de défilement verticale de la page
  let scrollPosition = window.scrollY;

  // Calculez le pourcentage de progression entre startCloud et endCloud
  let progression = (scrollPosition - startCloud) / (endCloud - startCloud);

  // Limitez la progression entre 0 et 1
  progression = Math.min(1, Math.max(0, progression));

  // Utilisez une fonction d'interpolation (par exemple, easeInOutQuad) pour rendre le mouvement plus fluide
  let easedProgression = easeInOutQuad(progression);
  console.log(scrollPosition);
  // Calculez la valeur de déplacement des nuages en fonction du pourcentage de progression
  let deplacement = 300 * easedProgression;

  // Appliquez le déplacement aux nuages
  if (scrollPosition >= startCloud && scrollPosition <= endCloud) {
    nuages.style.transform = `translateX(-${deplacement}px)`;
  }
});

// Fonction d'interpolation easeInOutQuad
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}