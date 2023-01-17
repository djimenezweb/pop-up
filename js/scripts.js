const rootStyles = document.documentElement.style;
const button = document.getElementById('button');
const popup = document.getElementById('popup');

const createPopup = (duration, message) => {
  popup.innerHTML = '';
  const pElement = document.createElement('p');
  popup.classList.add('popup--show');
  popup.prepend(pElement);
  pElement.textContent = message;

  let width = 100;
  const popupInterval = setInterval(() => {
    rootStyles.setProperty('--barwidth', width-- + '%');
    if (width <= 0) {
      popup.classList.remove('popup--show');
      clearInterval(popupInterval);
    }
  }, duration / 100);
};

button.addEventListener('click', () => {
  if (!popup.classList.contains('popup--show')) {
    createPopup(3000, 'Warning!');
  }
});
