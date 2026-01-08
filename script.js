// Small interactions: year, mobile nav, contact form feedback, lazy load images
document.getElementById('year').textContent = new Date().getFullYear();

// Nav toggle (very small)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');
  });
}

// Simple contact form handler (demo - integrate with Formspree or your backend)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = 'Sending...';
    setTimeout(() => {
      formMsg.textContent = 'Thanks! I received your message. I will reply within 2 business days.';
      form.reset();
    }, 900);
  });
}

// Minimal lazy loader for images with data-src
document.addEventListener('DOMContentLoaded', () => {
  const lazyImgs = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, {rootMargin: '200px'});
    lazyImgs.forEach(img => obs.observe(img));
  } else {
    // fallback
    lazyImgs.forEach(img => img.src = img.dataset.src);
  }
});
