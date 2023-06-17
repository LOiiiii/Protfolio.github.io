const circle = document.querySelector('.circle');
const posters = document.querySelectorAll('.poster a');

circle.addEventListener('animationend', () => {
  circle.remove();
  posters.forEach(poster => {
    poster.style.pointerEvents = 'auto';
  });
});
