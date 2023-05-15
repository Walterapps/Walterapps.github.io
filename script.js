document.addEventListener("DOMContentLoaded", function(event) {
  const carouselInner = document.querySelector('.carousel-inner');
  const images = carouselInner.querySelectorAll('img');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let counter = 0;
  const imageCount = images.length;
  const slideWidth = images[0].clientWidth;

  prevButton.addEventListener('click', function() {
    counter--;
    carouselInner.style.transform = `translateX(${-counter * slideWidth}px)`;

    if (counter < 0) {
      counter = imageCount - 1;
      carouselInner.style.transform = `translateX(${-counter * slideWidth}px)`;
    }
  });

  nextButton.addEventListener('click', function() {
    counter++;
    carouselInner.style.transform = `translateX(${-counter * slideWidth}px)`;

    if (counter >= imageCount) {
      counter = 0;
      carouselInner.style.transform = `translateX(${-counter * slideWidth}px)`;
    }
  });
});
