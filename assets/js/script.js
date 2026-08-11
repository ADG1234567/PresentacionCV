document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const prevButton = carousel.querySelector('[data-direction="prev"]');
    const nextButton = carousel.querySelector('[data-direction="next"]');

    let index = 0;

    const updateCarousel = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;

      if (dotsContainer) {
        Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === index);
        });
      }
    };

    prevButton?.addEventListener('click', () => updateCarousel(index - 1));
    nextButton?.addEventListener('click', () => updateCarousel(index + 1));

    if (dotsContainer) {
      Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => updateCarousel(dotIndex));
      });
    }

    setInterval(() => updateCarousel(index + 1), 5000);
  });
});
