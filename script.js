// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

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
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await response.json();
  document.getElementById("responseMessage").innerText = data.message;
});

app.post("/contact", (req, res) => {
  res.send("Message received!");
});
