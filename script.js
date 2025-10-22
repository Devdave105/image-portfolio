// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

// Scroll animation for creative section
const textBox = document.querySelector('.text-box');
const imageBox = document.querySelector('.image-box');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.8;

  if (textBox.getBoundingClientRect().top < triggerPoint) {
    textBox.style.opacity = '1';
    imageBox.style.opacity = '1';
  }
});
// Scroll reveal for process section
const steps = document.querySelectorAll('.step');

window.addEventListener('scroll', () => {
  steps.forEach(step => {
    const triggerPoint = window.innerHeight * 0.85;
    if (step.getBoundingClientRect().top < triggerPoint) {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }
  });
});


// Contact section scroll animation
const contactContent = document.querySelector('.contact-content');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  if (contactContent.getBoundingClientRect().top < trigger) {
    contactContent.style.opacity = '1';
    contactContent.style.transform = 'translateY(0)';
  }
});


// Scroll reveal for journey cards
const journeyCards = document.querySelectorAll('.journey-card');

window.addEventListener('scroll', () => {
  journeyCards.forEach(card => {
    const trigger = window.innerHeight * 0.85;
    if (card.getBoundingClientRect().top < trigger) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
