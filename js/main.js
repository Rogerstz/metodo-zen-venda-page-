let current = 0;
const slides = document.querySelector('.testimonials .slides');
const total = slides.children.length;

function update() {
  slides.style.transform = 'translateX(' + (-current * 100) + '%)';
}

function nextSlide() {
  current = (current + 1) % total;
  update();
}

function prevSlide() {
  current = (current - 1 + total) % total;
  update();
}
