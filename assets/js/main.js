const loading = () => {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loading');
        loader.className += ' hidden';
    });
};

loading();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Sticky Navigation
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const navSlide = () => {
    const navToggler = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    // const navLinks = document.querySelectorAll('.navbar a');

    
    navToggler.addEventListener('click', () => {
        // Toggle Navbar
        nav.classList.toggle('nav-active');

        // Navbar Toggle
        navToggler.classList.toggle('toggler');
    })
}
navSlide();