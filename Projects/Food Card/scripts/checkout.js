const itemContainer = document.querySelector('.ja-price-food-container');
const couponButtons = document.querySelectorAll('.coupon-option');
const couponMessage = document.querySelector('.coupon-message');
const placeOrderButton = document.querySelector('.place-order-button');
const orderMessage = document.querySelector('.order-message');
const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
let checkoutItems = [];
let activeCoupon = '';

try {
  checkoutItems = JSON.parse(localStorage.getItem('mishtiCheckoutItems')) || [];
} catch {
  checkoutItems = [];
}

// Keep a previously saved single item so existing checkouts are not lost.
if (!checkoutItems.length) {
  try {
    const oldItem = JSON.parse(localStorage.getItem('mishtiCheckoutItem'));
    if (oldItem) checkoutItems = [oldItem];
  } catch {
    checkoutItems = [];
  }
}

checkoutItems = checkoutItems
  .filter((item) => item && item.name && Number.isFinite(Number(item.price)))
  .map((item) => ({
    ...item,
    price: Number(item.price),
    quantity: Math.max(1, Number(item.quantity) || 1)
  }));

function saveCheckoutItems() {
  if (checkoutItems.length) {
    localStorage.setItem('mishtiCheckoutItems', JSON.stringify(checkoutItems));
  } else {
    localStorage.removeItem('mishtiCheckoutItems');
  }
  localStorage.removeItem('mishtiCheckoutItem');
}

function renderItems() {
  if (!checkoutItems.length) {
    itemContainer.innerHTML = '<p class="empty-order">Your checkout is empty. Explore the menu to choose a treat.</p>';
    return;
  }

  itemContainer.innerHTML = checkoutItems.map((item, index) => `
    <article class="checkout-item">
      <div class="foodimg-container"><img class="food-img" src="${item.image || ''}" alt="" /></div>
      <div class="food-info-container">
        <p class="ck-food-name"></p>
        <span class="serving-detail"></span>
        <div class="quantity-control" aria-label="Item quantity">
          <button class="quantity-button quantity-decrease" type="button" data-index="${index}" aria-label="Decrease quantity">−</button>
          <output class="quantity-value">${item.quantity}</output>
          <button class="quantity-button quantity-increase" type="button" data-index="${index}" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-item" type="button" data-index="${index}">Remove item</button>
        <div class="price-tag-container">${currency.format(item.price * item.quantity)}</div>
      </div>
    </article>`).join('');

  itemContainer.querySelectorAll('.checkout-item').forEach((element, index) => {
    element.querySelector('.ck-food-name').textContent = checkoutItems[index].name;
    element.querySelector('.serving-detail').textContent = `Serving size: ${checkoutItems[index].servingSize || 'M'}`;
  });

  itemContainer.querySelectorAll('.quantity-decrease').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      checkoutItems[index].quantity = Math.max(1, checkoutItems[index].quantity - 1);
      updateCheckout();
    });
  });
  itemContainer.querySelectorAll('.quantity-increase').forEach((button) => {
    button.addEventListener('click', () => {
      checkoutItems[Number(button.dataset.index)].quantity += 1;
      updateCheckout();
    });
  });
  itemContainer.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      checkoutItems.splice(Number(button.dataset.index), 1);
      updateCheckout();
    });
  });
}

function updateCheckout() {
  renderItems();
  const foodTotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasItems = checkoutItems.length > 0;
  const discount = activeCoupon === 'SWEET10'
    ? foodTotal * 0.1
    : activeCoupon === 'MISHTI50' && foodTotal >= 300
      ? 50
      : 0;
  const deliveryFee = hasItems && activeCoupon !== 'FREESHIP' ? 25 : 0;
  const foodTax = foodTotal * 0.05;
  const platformFee = hasItems ? 10 : 0;
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
  placeOrderButton.disabled = !hasItems;
  saveCheckoutItems();
}

couponButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const coupon = button.dataset.coupon;
    const foodTotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (coupon === 'MISHTI50' && foodTotal < 300) {
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
  if (!checkoutItems.length) return;
  orderMessage.textContent = 'Thank you! Your order has been placed.';
  checkoutItems = [];
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
