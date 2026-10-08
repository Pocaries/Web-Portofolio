document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  // Mobile navigation drawer toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });

    // Close the drawer after tapping a menu item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
      });
    });
  }

  // Active nav highlighting on scroll
  const updateActiveNav = () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === `#${currentSection}`);
    });
  };

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});
