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
  }, { threshold: 0.5 });

  hiddenTitles.forEach(function(title) {
      observer.observe(title);
  });
}


