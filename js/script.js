document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
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
  // TEMP TEST ADDRESS — revert to stepriseconstruction@gmail.com before going live
  window.location.href = `mailto:kaleemfairy@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app to send this enquiry...";
});
