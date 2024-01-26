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
