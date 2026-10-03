// Mobile navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking a nav link (on mobile)
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// Header scroll state
const header = document.querySelector('.header');

function handleScroll() {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// Reveal on scroll animations for service, pricing, register, contact blocks
const revealElements = document.querySelectorAll(
  '.reveal, .service-card, .pricing-card, .register-form, .contact-card'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all if IntersectionObserver not supported
  revealElements.forEach((el) => el.classList.add('visible'));
}

// Simple (fake) form submission feedback
const registerForm = document.getElementById('register-form');

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = registerForm.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Submitted ✓';

      setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
        registerForm.reset();
      }, 1800);
    }
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
