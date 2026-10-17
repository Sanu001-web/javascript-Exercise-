import { renderDessertCard, dessertCards } from '../FoodData/dessert-card.js'
import { renderfrquntOrderFoodCard, frqntlyOrderFoods } from '../FoodData/frqOrderFood.js';
import { renderDrinkCard, drinkCards } from '../FoodData/drink-card.js';
import { renderSoupCard, soupCards } from '../FoodData/soup-card.js';
import { updatePopupPrices } from './popUp.js';


renderDessertCard();
renderfrquntOrderFoodCard();
renderDrinkCard();
renderSoupCard();

const quantityPopup = document.querySelector('.js-popup-qantity');

if (quantityPopup) {
  const popupBackButton = quantityPopup.querySelector('.popup-back-btn');
  const popupFoodName = quantityPopup.querySelector('.food-name');
  const popupHeaderName = quantityPopup.querySelector('.bk-food-name');
  const popupFoodImage = quantityPopup.querySelector('.popup-food-img');
  const popupFoodInfo = quantityPopup.querySelector('.food-information');
  const servingSizeButtons = quantityPopup.querySelectorAll('.popup-food-quantity-size-btn');
  const placeOrderButton = quantityPopup.querySelector('.place-order-btn');
  const checkoutMessage = document.querySelector('.js-checkout-message');
  let popupCloseTimer;
  let orderCloseTimer;
  const placeOrderLabel = placeOrderButton.textContent;

  function closeQuantityPopup() {
    clearTimeout(orderCloseTimer);
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
      updatePopupPrices(quantityPopup, dessertPrice);

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
      clearTimeout(orderCloseTimer);
      placeOrderButton.disabled = false;
      placeOrderButton.textContent = placeOrderLabel;
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




    


    const selectedPriceLabel = selectedSize.closest('.popup-food-air-quantity')
      ?.querySelector('.popup-food-quantity-price')?.textContent || '';
    const selectedPrice = Number(selectedPriceLabel.match(/[\d.]+/)?.[0]);
    const checkoutItem = {
      name: quantityPopup.dataset.dessertName,
      image: popupFoodImage.src,
      price: selectedPrice || Number(quantityPopup.dataset.dessertPrice),
      servingSize: selectedSize.textContent.trim(),
      quantity: 1
    };
    localStorage.setItem('mishtiCheckoutItem', JSON.stringify(checkoutItem));
    placeOrderButton.disabled = true;
    placeOrderButton.textContent = 'Order Confirmed!';

    setTimeout(() => {
      placeOrderButton.textContent = placeOrderLabel;
      placeOrderButton.disabled = false;
    }, 1500);

    orderCloseTimer = setTimeout(closeQuantityPopup, 800);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && quantityPopup.classList.contains('is-open')) {
      closeQuantityPopup();
    }
  });
}

const searchInput = document.querySelector('.js-srch-box');
const searchButton = document.querySelector('.srch-btn');



let searchTerm = '';
let selectedCategory = 'All';
let selectedSort = 'sort';
const filterBtn = document.querySelector('.js-filter-btn');
const sortItemsBtn = document.querySelector('.js-sort-btn');
const filterableCards = [...dessertCards, ...frqntlyOrderFoods, ...drinkCards, ...soupCards]
  .filter((foodCard) => foodCard.querySelector('.price-tag'));
const originalCardOrder = new Map(filterableCards.map((foodCard, index) => [foodCard, index]));

function updateVisibleCards() {
  filterableCards.forEach((foodCard) => {
    const category = foodCard.querySelector('.dessert-catorigies, .fOrderFood-catorigies')
      ?.textContent.trim();
    const matchesSearch = foodCard.textContent.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || category === selectedCategory ||
      (selectedCategory === 'Waffles' && category === 'Waffle');

    foodCard.hidden = !matchesSearch || !matchesCategory;
  });

  const cardsByContainer = new Map();
  filterableCards.forEach((foodCard) => {
    if (!foodCard.parentElement) return;
    const siblings = cardsByContainer.get(foodCard.parentElement) || [];
    siblings.push(foodCard);
    cardsByContainer.set(foodCard.parentElement, siblings);
  });

  cardsByContainer.forEach((cards, container) => {
    cards.sort((first, second) => {
      if (selectedSort === 'Price: High-Low' || selectedSort === 'Price: Low-High') {
        const firstPrice = Number(first.querySelector('.price-tag')?.textContent.trim()) || 0;
        const secondPrice = Number(second.querySelector('.price-tag')?.textContent.trim()) || 0;
        const direction = selectedSort === 'Price: High-Low' ? -1 : 1;
        return (firstPrice - secondPrice) * direction;
      }
      if (selectedSort === 'Name: A to Z') {
        const firstName = first.querySelector('.dessert-name, .fOrderFood-name')?.textContent.trim() || '';
        const secondName = second.querySelector('.dessert-name, .fOrderFood-name')?.textContent.trim() || '';
        return firstName.localeCompare(secondName) ||
          originalCardOrder.get(first) - originalCardOrder.get(second);
      }
      if (selectedSort === 'Popularity') {
        const getRating = (foodCard) => {
          const starsUrl = foodCard.querySelector('.rating-icons')?.src || '';
          const rating = starsUrl.match(/rating-?(\d+)/)?.[1] || '';
          return rating.length === 2
            ? Number(`${rating[0]}.${rating[1]}`)
            : Number(rating) || 0;
        };
        return getRating(second) - getRating(first) ||
          originalCardOrder.get(first) - originalCardOrder.get(second);
      }
      return originalCardOrder.get(first) - originalCardOrder.get(second);
    });
    cards.forEach((foodCard) => container.append(foodCard));
  });
}

function searchCorner() {
  searchTerm = searchInput.value.trim().toLowerCase();
  updateVisibleCards();
}
searchButton.addEventListener('click', searchCorner);
searchInput.addEventListener('input', searchCorner);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchCorner();
  }
});

filterBtn?.addEventListener('change', () => {
  selectedCategory = filterBtn.value;
  updateVisibleCards();
});

sortItemsBtn?.addEventListener('change', () => {
  selectedSort = sortItemsBtn.value;
  updateVisibleCards();
});
//sort 
const sortBtn = document.querySelector("#sort");

sortBtn.addEventListener("change", function () {
  if (this.value === "sort") {
    this.style.width = "70px";
  } else {
    this.style.width = "auto";
    this.style.width = this.scrollWidth + "px";
  }
});


const filterButn = document.querySelector("#filter");

filterButn?.addEventListener("change", function () {
  if (this.value === "All") {
    this.style.width = "110px";
  } else {
    this.style.width = "auto";
    this.style.width = this.scrollWidth + "px";
  }
});
