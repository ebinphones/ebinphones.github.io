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
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // Use instant scroll so it always reaches the very top, even on mobile
  // where the global smooth-scroll behavior can sometimes get interrupted
  // partway (e.g. by the address bar collapsing).
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.body.scrollTop = 0; // Safari fallback
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera fallback
}

const slider = document.querySelector('.slider');
let isSwiping = false;
let startX = 0;
let currentX = 0;

if (slider) {
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
}

// Navbar "Download" button (desktop nav item and mobile hamburger menu item)
// should go straight to the App Store or Google Play based on the visitor's
// device/OS instead of scrolling down to the #sign-up section.
(function(){
  var downloadBtn = document.getElementById('signup');
  if (!downloadBtn) return;
  var ua = navigator.userAgent || '';
  // Treat any Apple device/platform (iPhone, iPad, or Mac desktop) as "Apple";
  // everything else (Windows, Android, Linux, ChromeOS, etc.) gets Google Play.
  var isApple = /iPad|iPhone|iPod|Macintosh/.test(ua) || navigator.platform === 'MacIntel';
  downloadBtn.setAttribute(
    'href',
    isApple
      ? 'https://apps.apple.com/us/app/ebin/id1563293790'
      : 'https://play.google.com/store/apps/details?id=com.ebinphones.ebin&hl=en_US'
  );
  downloadBtn.setAttribute('target', '_blank');
  downloadBtn.setAttribute('rel', 'noopener');
})();


