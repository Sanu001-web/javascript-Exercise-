import { card } from '../FoodData/dessert-card.js';

const itemContainer = document.querySelector('.ja-price-food-container');
const couponButtons = document.querySelectorAll('.coupon-option');
const couponMessage = document.querySelector('.coupon-message');
const placeOrderButton = document.querySelector('.place-order-button');
const orderMessage = document.querySelector('.order-message');
const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
const defaultItem = card[0];
let checkoutItem;
let activeCoupon = '';

try {
  checkoutItem = JSON.parse(localStorage.getItem('mishtiCheckoutItem'));
} catch {
  checkoutItem = null;
}

if (!checkoutItem || !checkoutItem.name || !Number.isFinite(Number(checkoutItem.price))) {
  checkoutItem = {
    name: defaultItem.dessertName,
    image: defaultItem.dessertImg,
    price: Number(defaultItem.dessertPrice),
    servingSize: 'M',
    quantity: 1
  };
}
checkoutItem.price = Number(checkoutItem.price);
checkoutItem.quantity = Math.max(1, Number(checkoutItem.quantity) || 1);

function renderItem() {
  if (!checkoutItem) {
    itemContainer.innerHTML = '<p class="empty-order">Your checkout is empty. Explore the menu to choose a treat.</p>';
    return;
  }

  itemContainer.innerHTML = `
    <div class="foodimg-container"><img class="food-img" src="${checkoutItem.image}" alt="${checkoutItem.name}" /></div>
    <div class="food-info-container">
      <p class="ck-food-name"></p>
      <span class="serving-detail"></span>
      <div class="quantity-control" aria-label="Item quantity">
        <button class="quantity-button quantity-decrease" type="button" aria-label="Decrease quantity">−</button>
        <output class="quantity-value">${checkoutItem.quantity}</output>
        <button class="quantity-button quantity-increase" type="button" aria-label="Increase quantity">+</button>
      </div>
      <button class="remove-item" type="button">Remove item</button>
      <div class="price-tag-container"><span class="price"></span></div>
    </div>`;
  itemContainer.querySelector('.ck-food-name').textContent = checkoutItem.name;
  itemContainer.querySelector('.serving-detail').textContent = `Serving size: ${checkoutItem.servingSize || 'M'}`;
  itemContainer.querySelector('.price').textContent = currency.format(checkoutItem.price * checkoutItem.quantity);
  itemContainer.querySelector('.quantity-decrease').addEventListener('click', () => {
    checkoutItem.quantity = Math.max(1, checkoutItem.quantity - 1);
    updateCheckout();
  });
  itemContainer.querySelector('.quantity-increase').addEventListener('click', () => {
    checkoutItem.quantity += 1;
    updateCheckout();
  });
  itemContainer.querySelector('.remove-item').addEventListener('click', () => {
    checkoutItem = null;
    localStorage.removeItem('mishtiCheckoutItem');
    updateCheckout();
  });
}

function updateCheckout() {
  renderItem();
  const foodTotal = checkoutItem ? checkoutItem.price * checkoutItem.quantity : 0;
  const discount = activeCoupon === 'SWEET10'
    ? foodTotal * 0.1
    : activeCoupon === 'MISHTI50' && foodTotal >= 300
      ? 50
      : 0;
  const deliveryFee = checkoutItem && activeCoupon !== 'FREESHIP' ? 25 : 0;
  const foodTax = foodTotal * 0.05;
  const platformFee = checkoutItem ? 10 : 0;
  const platformTax = platformFee * 0.18;
  const deliveryTax = deliveryFee * 0.18;
  const total = Math.max(0, foodTotal - discount) + foodTax + platformFee + platformTax + deliveryFee + deliveryTax;

  document.querySelector('[data-total="food"]').textContent = currency.format(foodTotal);
  document.querySelector('[data-total="food-tax"]').textContent = currency.format(foodTax);
  document.querySelector('[data-total="platform"]').textContent = currency.format(platformFee);
  document.querySelector('[data-total="platform-tax"]').textContent = currency.format(platformTax);
  document.querySelector('[data-total="delivery"]').textContent = currency.format(deliveryFee);
  document.querySelector('[data-total="delivery-tax"]').textContent = currency.format(deliveryTax);
  document.querySelector('[data-total="discount"]').textContent = `−${currency.format(discount)}`;
  document.querySelector('.discount-row').hidden = !discount;
  document.querySelector('[data-total="grand"]').textContent = currency.format(total);
  placeOrderButton.disabled = !checkoutItem;
  if (checkoutItem) {
    localStorage.setItem('mishtiCheckoutItem', JSON.stringify(checkoutItem));
  } else {
    localStorage.removeItem('mishtiCheckoutItem');
  }
}

couponButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const coupon = button.dataset.coupon;
    if (coupon === 'MISHTI50' && (!checkoutItem || checkoutItem.price * checkoutItem.quantity < 300)) {
      activeCoupon = '';
      couponButtons.forEach((option) => {
        option.classList.remove('is-selected');
        option.setAttribute('aria-pressed', 'false');
      });
      couponMessage.textContent = 'MISHTI50 applies to food totals of ₹300 or more.';
      updateCheckout();
      return;
    }
    activeCoupon = activeCoupon === coupon ? '' : coupon;
    couponButtons.forEach((option) => {
      const selected = option.dataset.coupon === activeCoupon;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    couponMessage.textContent = activeCoupon ? `${activeCoupon} applied to your order.` : 'Coupon removed. Choose an offer to apply it.';
    updateCheckout();
  });
});

placeOrderButton.addEventListener('click', () => {
  if (!checkoutItem) return;
  orderMessage.textContent = 'Thank you! Your order has been placed.';
  localStorage.removeItem('mishtiCheckoutItem');
  checkoutItem = null;
  activeCoupon = '';
  couponButtons.forEach((button) => {
    button.classList.remove('is-selected');
    button.setAttribute('aria-pressed', 'false');
  });
  updateCheckout();
});

document.querySelectorAll('.promo-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('.promo-banner').remove());
});

updateCheckout();
