// initialisation
function initialiseDataValues() {
  var next, prev, slides;
  // Locate the slideshow containers
  var containers = document.querySelectorAll('div.w3-content.w3-display-container');
  // Loop through the containers
  for (var ix = 0; ix < containers.length; ix++) {
    // Count the number of slides
    slides = containers[ix].getElementsByClassName('mySlides');
    // Add 'data-slides' property to the container
    containers[ix].dataset.slides = slides.length || 0;
    if (containers[ix].dataset.slides > 0) {
      // Add 'data-idx' property to the container
      containers[ix].dataset.idx = 1;
      // Add event handler for 'previous' slide click
      prev = containers[ix].getElementsByClassName('w3-left');
      if (prev) {
        prev[0].addEventListener('click', goPrevSlide);
      }
      // Add event handler for 'next' slide click
      next = containers[ix].getElementsByClassName('w3-right');
      if (next) {
        next[0].addEventListener('click', goNextSlide);
      }
      // Show the first slide in the container
      showSlide(containers[ix], 1);
    }
  }
}

function goToSlide(index) {
  // The container is two levels above this element
  var container = event.target.parentNode.parentNode;
  showSlide(container, index);
}

function goPrevSlide() {
  // The container is two levels above this element
  var container = event.target.parentNode.parentNode;
  showSlide(container, Number.parseInt(container.dataset.idx) - 1);
}

function goNextSlide() {
  // The container is two levels above this element
  var container = event.target.parentNode.parentNode;
  showSlide(container, Number.parseInt(container.dataset.idx) + 1);
}

function showSlide(container, n) {
  var slides = container.getElementsByClassName('mySlides'),
      dots = container.getElementsByClassName('demo'),
      slideIdx = 0,
      dotIdx = 0,
      slideToShow = 0;
  if (n > slides.length) {
    container.dataset.idx = 1;
  } else if (n < 1) {
    container.dataset.idx = slides.length;
  } else {
    container.dataset.idx = n;
  }
  for (slideIdx = 0; slideIdx < slides.length; slideIdx++) {
    slides[slideIdx].style.display = 'none';
  }
  for (dotIdx = 0; dotIdx < dots.length; dotIdx++) {
    dots[dotIdx].classList.remove('w3-white');
  }
  slideToShow = Number.parseInt(container.dataset.idx) - 1;
  slides[slideToShow].style.display = 'block';
  if (slideToShow < dots.length) {
    dots[slideToShow].classList.add('w3-white');
  }
}

initialiseDataValues();