let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
  const slidesContainer = document.querySelector('.slides');
  const total = slides.length;
  index = (i + total) % total;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  showSlide(index + 1);
}, 3000);