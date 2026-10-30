const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal sections as they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .skill-bars').forEach(el => revealObserver.observe(el));

// Reading progress indicator.
const progress = document.querySelector('.scroll-progress');
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${amount}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Contact form creates a pre-filled email. Replace the address with your own.
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const recipient = 'hello@mehranullah.com'; // TODO: replace with your real email
  const subject = encodeURIComponent(`Portfolio inquiry: ${data.get('subject')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('subject')}\n\n${data.get('message')}`
  );
  document.getElementById('formNote').textContent = 'Opening your email app. If it does not open, email me directly at hello@mehranullah.com.';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
