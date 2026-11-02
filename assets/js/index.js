new IntersectionObserver(([hero]) => {
  document.querySelector('.to-top').classList.toggle('visible', !hero.isIntersecting);
}).observe(document.getElementById('top'));
