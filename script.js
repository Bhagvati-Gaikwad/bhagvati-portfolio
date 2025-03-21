// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll-to-top button logic
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.textContent = '↑';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
