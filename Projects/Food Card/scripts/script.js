import { renderDessertCard, dessertCards } from '../FoodData/dessert-card.js'
import { renderfrquntOrderFoodCard, frqntlyOrderFoods } from '../FoodData/frqOrderFood.js';


renderDessertCard();
renderfrquntOrderFoodCard();

const quantityPopup = document.querySelector('.js-popup-qantity');
const popupBackButton = document.querySelector('.popup-back-btn');
const popupFoodName = quantityPopup.querySelector('.food-name');
const popupHeaderName = quantityPopup.querySelector('.bk-food-name');
const popupFoodImage = quantityPopup.querySelector('.popup-food-img');
const popupFoodInfo = quantityPopup.querySelector('.food-information');
const servingSizeButtons = quantityPopup.querySelectorAll('.popup-food-quantity-size-btn');
const placeOrderButton = quantityPopup.querySelector('.place-order-btn');
const checkoutMessage = document.querySelector('.js-checkout-message');
let popupCloseTimer;

function closeQuantityPopup() {
  if (!quantityPopup.classList.contains('is-open')) return;

  quantityPopup.classList.remove('is-open');
  quantityPopup.classList.add('is-closing');
  quantityPopup.setAttribute('aria-hidden', 'true');
  delete quantityPopup.dataset.dessertName;

  clearTimeout(popupCloseTimer);
  popupCloseTimer = setTimeout(() => {
    quantityPopup.classList.remove('is-closing');
  }, 180);
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const foodCard = button.closest('.dessert-card, .frqntly-order-food-card');
    const dessertName = foodCard.querySelector('.dessert-name, .fOrderFood-name').textContent.trim();
    const dessertImage = foodCard.querySelector('.dessert-img, .fOrderFood-img');

    const dessertPrice = foodCard.querySelector('.price-tag').textContent.trim();
    quantityPopup.dataset.dessertPrice = dessertPrice;

    if (quantityPopup.classList.contains('is-open') &&
      quantityPopup.dataset.dessertName === dessertName) {
      closeQuantityPopup();
      return;
    }

    popupFoodName.textContent = dessertName;
    popupHeaderName.textContent = dessertName;
    popupFoodImage.src = dessertImage.src;
    popupFoodImage.alt = dessertName;
    popupFoodInfo.textContent = 'Choose a serving size to continue.';
    servingSizeButtons.forEach((sizeButton) => {
      sizeButton.setAttribute('aria-pressed', 'false');
      sizeButton.classList.remove('is-selected');
    });
    clearTimeout(popupCloseTimer);
    quantityPopup.classList.remove('is-closing');
    quantityPopup.dataset.dessertName = dessertName;
    quantityPopup.classList.add('is-open');
    quantityPopup.setAttribute('aria-hidden', 'false');
  });
});

popupBackButton.addEventListener('click', closeQuantityPopup);

servingSizeButtons.forEach((sizeButton) => {
  sizeButton.addEventListener('click', () => {
    servingSizeButtons.forEach((button) => {
      const isSelected = button === sizeButton;
      button.setAttribute('aria-pressed', String(isSelected));
      button.classList.toggle('is-selected', isSelected);
    });
  });
});

placeOrderButton.addEventListener('click', () => {
  const selectedSize = quantityPopup.querySelector('.popup-food-quantity-size-btn[aria-pressed="true"]');
  if (!selectedSize) {
    popupFoodInfo.textContent = 'Please choose a serving size first.';
    return;
  }

  // checkoutMessage.textContent = `Added ${quantityPopup.dataset.dessertName} (${selectedSize.textContent.trim()} serving) to checkout.`;

  checkoutMessage.textContent = `Added ${quantityPopup.dataset.dessertName} (${selectedSize.textContent.trim()} serving) ${quantityPopup.dataset.dessertPrice}`;


  closeQuantityPopup();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && quantityPopup.classList.contains('is-open')) {
    closeQuantityPopup();
  }
});

const searchInput = document.querySelector('.js-srch-box');
const searchButton = document.querySelector('.srch-btn');

function searchCorner() {
  const search = searchInput.value.trim().toLowerCase();

  [...dessertCards, ...frqntlyOrderFoods].forEach((foodCard) => {
    const matches = foodCard.textContent.toLowerCase().includes(search);
    foodCard.hidden = !matches;
  });
}
searchButton.addEventListener('click', searchCorner);
searchInput.addEventListener('input', searchCorner);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchCorner();
  }
});
