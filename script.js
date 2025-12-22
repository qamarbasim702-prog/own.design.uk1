/* =========================
   SMOOTH SCROLL (SEO SAFE)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
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

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* =========================
   SUBSCRIBE BUTTON (SAFE)
========================= */
const subscribeForm = document.querySelector('.subscribe-form');
if(subscribeForm){
  subscribeForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
}

/* =========================
   BACK TO TOP BUTTON (OPTIONAL)
========================= */
const topBtn = document.createElement('button');
topBtn.innerText = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 400){
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/* Close menu on link click (mobile UX) */
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
const contactForm = document.querySelector('.contact-form');

if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    contactForm.reset();
  });
}const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fades.forEach(fade => observer.observe(fade));

