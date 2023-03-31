const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const slider = document.querySelector('.slider');
let isSwiping = false;
let startX = 0;
let currentX = 0;

slider.addEventListener('touchstart', (event) => {
  isSwiping = true;
  startX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
  if (!isSwiping) return;
  currentX = event.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  isSwiping = false;
  if (currentX < startX) {
    // Swiped left
  }
  if (currentX > startX) {
    // Swiped right
  }
  startX = 0;
  currentX = 0;
});






// get the slider element
const slider = document.querySelector('.slider');

// set up touch event listeners
let startX, endX;
slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
slider.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // swipe left, show next slide
    showSlide(currentSlide + 1);
  } else if (endX - startX > 50) {
    // swipe right, show previous slide
    showSlide(currentSlide - 1);
  }
});

// update the slider to show the specified slide
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const radios = document.querySelectorAll('[name="radio-btn"]');
  if (n < 0) {
    n = slides.length - 1;
  } else if (n >= slides.length) {
    n = 0;
  }
  slides.forEach(slide => slide.classList.remove('first'));
  slides[n].classList.add('first');
  radios.forEach(radio => radio.checked = false);
  radios[n].checked = true;
}
