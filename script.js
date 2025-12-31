/* =========================
   SMOOTH SCROLL (SEO SAFE)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* =========================
   FADE-IN ON SCROLL
========================= */
const faders = document.querySelectorAll('.fade');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* =========================
   SUBSCRIBE FORM (SAFE)
========================= */
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing! Stay tuned for updates.');
    this.reset();
  });
}

/* =========================
   CONTACT FORM (SAFE)
========================= */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will respond soon.');
    this.reset();
  });
}

/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.createElement('button');
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
topBtn.id = "topBtn";
topBtn.setAttribute('aria-label', 'Back to Top');
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('change', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu on link click (mobile UX)
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      navMenu.classList.remove('active');
    });
  });
}