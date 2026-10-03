import { renderDessertCard, dessertCards } from './dessertData/dessert-card.js'

renderDessertCard();


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const isAdded = button.classList.toggle('added');
    const icon = button.querySelector('svg');

    button.textContent = isAdded ? 'Added!' : 'Add to Cart';
    if (icon) {
      button.prepend(icon);
    }
    button.setAttribute('aria-pressed', String(isAdded));
  });
});

const searchInput = document.querySelector('.js-srch-box');
const searchButton = document.querySelector('.srch-btn');

function searchCorner() {
  const search = searchInput.value.trim().toLowerCase();

  dessertCards.forEach((dessertCard) => {
    const matches = dessertCard.textContent.toLowerCase().includes(search);
    dessertCard.hidden = !matches;
  });
}
searchButton.addEventListener('click', searchCorner);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchCorner();
  }
});




