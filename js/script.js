document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navBackdrop = document.getElementById('navBackdrop');

function setNavOpen(isOpen) {
  mainNav.classList.toggle('open', isOpen);
  navBackdrop.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

navToggle.addEventListener('click', () => {
  setNavOpen(!mainNav.classList.contains('open'));
});
navBackdrop.addEventListener('click', () => setNavOpen(false));
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setNavOpen(false));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNavOpen(false);
});

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const projectType = form.projectType.value;
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Enquiry: ${projectType} - ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nProject Type: ${projectType}\nMessage: ${message}`
  );
  window.location.href = `mailto:stepriseconstruction@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app to send this enquiry...";
});
