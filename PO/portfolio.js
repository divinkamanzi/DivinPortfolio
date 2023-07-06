// script.js

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});
function revealbutton() {
  document.getElementById("demo").innerHTML ="DEVELOPER";

}


function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
 
}
