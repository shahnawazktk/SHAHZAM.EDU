// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Menu toggle function
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuToggle = document.querySelector('.menu-toggle');
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

// Count animation
function animateCounter(id, target, speed) {
  let count = 0;
  const element = document.getElementById(id);
  const increment = target / speed;

  const updateCount = () => {
    count += increment;
    if (count < target) {
      element.innerText = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      element.innerText = target;
    }
  };

  updateCount();
}

// Start animations when page loads
window.addEventListener('load', () => {
  animateCounter('courseCount', 50, 50);
  animateCounter('studentCount', 210, 20);
});

// Close menu when clicking on a link
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Scroll events
window.onscroll = () => {
  const scrollY = window.scrollY;
  const header = document.getElementById("mainHeader");
  const topBtn = document.getElementById("backToTop");

  if (header) {
    header.classList.toggle("fixed", scrollY > 100);
  }

  if (topBtn) {
    topBtn.style.display = scrollY > 300 ? "block" : "none";
  }
};

// Back to top button click
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
