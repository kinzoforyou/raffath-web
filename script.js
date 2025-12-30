// Popup logic (hanya aktif di contact.html)
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
  });
}
if(closePopup){
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Ubah ikon ☰ jadi ✖
  if(navLinks.classList.contains('show')){
    menuToggle.innerHTML = '&#10006;'; // ✖
  } else {
    menuToggle.innerHTML = '&#9776;'; // ☰
  }
});