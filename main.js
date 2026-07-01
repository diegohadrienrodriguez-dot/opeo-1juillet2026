// Mobile Menu
function openMob() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.style.display = 'flex';
}

function closeMob() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.style.display = 'none';
}

// Lang Modal
function checkEnLang() {
  const modal = document.getElementById('langModal');
  if (modal) modal.style.display = 'flex';
}

function closeLangModal() {
  const modal = document.getElementById('langModal');
  if (modal) modal.style.display = 'none';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mob-menu a').forEach(link => {
  link.addEventListener('click', closeMob);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for reveal animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}
