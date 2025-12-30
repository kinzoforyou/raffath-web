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