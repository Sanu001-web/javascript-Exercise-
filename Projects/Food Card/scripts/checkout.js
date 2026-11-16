const itemContainer = document.querySelector('.ja-price-food-container');
const couponButtons = document.querySelectorAll('.coupon-option');
const couponMessage = document.querySelector('.coupon-message');
const placeOrderButton = document.querySelector('.place-order-button');
const addressEditButton = document.querySelector('.js-address-edit');
const addressForm = document.querySelector('.js-address-form');
const addressDisplayName = document.querySelector('.js-address-name');
const addressDisplayLines = document.querySelector('.js-address-lines');
const addressFormMessage = document.querySelector('.address-form-message');
const orderMessage = document.querySelector('.order-message');
const orderTrackingCard = document.querySelector('.order-tracking-card');
const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
const orderStorageKey = 'MishriOrders';
let checkoutItems = [];
let activeCoupon = '';
let checkoutTotal = 0;
let previousOrders = [];

try {
  const storedOrders = JSON.parse(localStorage.getItem(orderStorageKey));
  previousOrders = Array.isArray(storedOrders)
    ? storedOrders.filter((order) => order && typeof order.id === 'string' && typeof order.itemName === 'string' &&
      Number.isFinite(order.total) && order.address && typeof order.address.city === 'string' && typeof order.address.region === 'string')
    : [];
} catch {
  previousOrders = [];
}

function renderAddress(address) {
  if (!address) {
    addressDisplayName.textContent = 'No address saved yet';
    addressDisplayLines.textContent = 'Add a delivery address for your convenience.';
    return;
  }
  addressDisplayName.textContent = `${address.name} · ${address.phone}`;
  addressDisplayLines.textContent = [address.street, `${address.city}, ${address.region} ${address.postal}`].join(' · ');
}

let savedAddress = null;
try {
  savedAddress = JSON.parse(localStorage.getItem('MishriDeliveryAddress'));
} catch {
  savedAddress = null;
}
if (!savedAddress || !['name', 'phone', 'street', 'city', 'region', 'postal'].every((key) => typeof savedAddress[key] === 'string')) {
  savedAddress = null;
}
renderAddress(savedAddress);

addressEditButton.addEventListener('click', () => {
  addressForm.hidden = !addressForm.hidden;
  addressEditButton.setAttribute('aria-expanded', String(!addressForm.hidden));
  addressEditButton.querySelector('span').textContent = addressForm.hidden ? 'Edit address' : 'Close form';
  addressFormMessage.textContent = '';
  if (!addressForm.hidden) {
    ['name', 'phone', 'street', 'city', 'region', 'postal'].forEach((key) => {
      addressForm.elements[key].value = savedAddress?.[key] || '';
    });
    addressForm.elements.name.focus();
  }
});

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(addressForm);
  const address = Object.fromEntries(['name', 'phone', 'street', 'city', 'region', 'postal'].map((key) => [key, String(formData.get(key) || '').trim()]));
  try {
    localStorage.setItem('MishriDeliveryAddress', JSON.stringify(address));
    savedAddress = address;
    renderAddress(savedAddress);
    addressForm.hidden = true;
    addressEditButton.setAttribute('aria-expanded', 'false');
    addressEditButton.querySelector('span').textContent = 'Edit address';
    addressFormMessage.textContent = '';
  } catch {
    addressFormMessage.textContent = 'Could not save this address in browser storage. Check your browser settings and try again.';
  }
});

document.querySelector('.js-address-cancel').addEventListener('click', () => {
  addressForm.hidden = true;
  addressEditButton.setAttribute('aria-expanded', 'false');
  addressEditButton.querySelector('span').textContent = 'Edit address';
  addressFormMessage.textContent = '';
});

try {
  const storedCart = JSON.parse(localStorage.getItem('MishriCheckoutItem'));
  const items = Array.isArray(storedCart) ? storedCart : storedCart ? [storedCart] : [];
  checkoutItems = items
    .filter((item) => item && typeof item.name === 'string' && item.name.trim() &&
      Number.isFinite(Number(item.price)) && Number(item.price) >= 0)
    .map((item) => {
      const quantity = Number(item.quantity);
      return {
        ...item,
        price: Number(item.price),
        quantity: Number.isFinite(quantity) ? Math.max(1, Math.floor(quantity)) : 1
      };
    });
} catch {
  checkoutItems = [];
}

function escapeAttribute(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

const trackingStages = [
  { title: 'Order confirmed', after: 0, detail: 'Your order was saved in this browser.' },
  { title: 'Preparing', after: 60_000, detail: 'The kitchen is preparing your order (simulated).' },
  { title: 'On the way', after: 180_000, detail: 'Your order is marked as on the way (simulated).' },
  { title: 'Delivered', after: 360_000, detail: 'The demo timeline marked this order delivered.' }
];

function getTrackingStage(order) {
  const createdAt = Date.parse(order.createdAt);
  const elapsed = Number.isFinite(createdAt) ? Math.max(0, Date.now() - createdAt) : 0;
  let stageIndex = trackingStages.length - 1;
  for (let index = 0; index < trackingStages.length; index += 1) {
    if (elapsed < trackingStages[index].after) {
      stageIndex = Math.max(0, index - 1);
      break;
    }
  }
  return { stageIndex, elapsed };
}

function renderOrderTracking(order) {
  if (!order) return;

  orderTrackingCard.hidden = false;
  orderTrackingCard.querySelector('.tracking-order-id').textContent = `Order ID: ${order.id}`;
  const orderItems = Array.isArray(order.items) ? order.items : null;
  const itemSummary = orderItems?.length
    ? orderItems.map((item) => `${item.quantity} × ${item.name}`).join(', ')
    : `${order.quantity} × ${order.itemName}`;
  orderTrackingCard.querySelector('.tracking-summary').textContent =
    `${itemSummary} · ${currency.format(order.total)} · ${order.address.city}, ${order.address.region}`;

  const { stageIndex, elapsed } = getTrackingStage(order);
  const stage = trackingStages[stageIndex];
  orderTrackingCard.querySelector('#tracking-title').textContent = stage.title;
  const savedOrder = previousOrders.find((saved) => saved.id === order.id);
  const statusChanged = (savedOrder?.status ?? order.status) !== stage.title;
  order.status = stage.title;
  if (savedOrder && statusChanged) {
    savedOrder.status = stage.title;
    console.info('Mishri order tracking update:', {
      id: order.id,
      status: stage.title,
      updatedAt: new Date().toISOString(),
      deliveryArea: `${order.address.city}, ${order.address.region}`
    });
    try {
      localStorage.setItem(orderStorageKey, JSON.stringify(previousOrders));
    } catch {
      // Keep showing the calculated status even if browser storage is unavailable.
    }
  }

  const steps = orderTrackingCard.querySelectorAll('.tracking-timeline li');
  steps.forEach((step, index) => {
    step.classList.toggle('is-complete', index < stageIndex);
    step.classList.toggle('is-current', index === stageIndex);
    if (index === stageIndex) {
      step.setAttribute('aria-current', 'step');
    } else {
      step.removeAttribute('aria-current');
    }
    step.querySelector('.tracking-step-detail').textContent = trackingStages[index].detail;
  });

  const statusMessage = stageIndex === trackingStages.length - 1
    ? 'Demo timeline complete.'
    : `Next simulated update in about ${Math.max(1, Math.ceil((trackingStages[stageIndex + 1].after - elapsed) / 60_000))} min.`;
  orderTrackingCard.querySelector('.tracking-status').textContent = `${stage.title} · ${statusMessage}`;
}

function renderItem() {
  if (!checkoutItems.length) {
    itemContainer.innerHTML = '<p class="empty-order">Your checkout is empty. Explore the menu to choose a treat.</p>';
    return;
  }

  itemContainer.innerHTML = checkoutItems.map((item, index) => `
    <article class="checkout-item-row" data-item-index="${index}">
      <div class="foodimg-container"><img class="food-img" src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.name)}" /></div>
      <div class="food-info-container">
        <p class="ck-food-name">${escapeAttribute(item.name)}</p>
        <span class="serving-detail">Serving size: ${escapeAttribute(item.servingSize || 'M')}</span>
        <div class="quantity-control" aria-label="${escapeAttribute(item.name)} quantity">
          <button class="quantity-button quantity-decrease" type="button" aria-label="Decrease quantity">−</button>
          <output class="quantity-value">${item.quantity}</output>
          <button class="quantity-button quantity-increase" type="button" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-item" type="button">Remove item</button>
        <div class="price-tag-container"><span class="price">${currency.format(item.price * item.quantity)}</span></div>
      </div>
    </article>`).join('');

  itemContainer.querySelectorAll('.checkout-item-row').forEach((row) => {
    const index = Number(row.dataset.itemIndex);
    row.querySelector('.quantity-decrease').addEventListener('click', () => {
      checkoutItems[index].quantity = Math.max(1, checkoutItems[index].quantity - 1);
      updateCheckout();
    });
    row.querySelector('.quantity-increase').addEventListener('click', () => {
      checkoutItems[index].quantity += 1;
      updateCheckout();
    });
    row.querySelector('.remove-item').addEventListener('click', () => {
      checkoutItems.splice(index, 1);
      updateCheckout();
    });
  });
}

function updateCheckout() {
  renderItem();
  const foodTotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = activeCoupon === 'SWEET10'
    ? foodTotal * 0.1
    : activeCoupon === 'Mishri50' && foodTotal >= 300
      ? 50
      : 0;
  const deliveryFee = checkoutItems.length && activeCoupon !== 'FREESHIP' ? 25 : 0;
  const foodTax = foodTotal * 0.05;
  const platformFee = checkoutItems.length ? 10 : 0;
  const platformTax = platformFee * 0.18;
  const deliveryTax = deliveryFee * 0.18;
  const total = Math.max(0, foodTotal - discount) + foodTax + platformFee + platformTax + deliveryFee + deliveryTax;
  checkoutTotal = total;

  document.querySelector('[data-total="food"]').textContent = currency.format(foodTotal);
  document.querySelector('[data-total="food-tax"]').textContent = currency.format(foodTax);
  document.querySelector('[data-total="platform"]').textContent = currency.format(platformFee);
  document.querySelector('[data-total="platform-tax"]').textContent = currency.format(platformTax);
  document.querySelector('[data-total="delivery"]').textContent = currency.format(deliveryFee);
  document.querySelector('[data-total="delivery-tax"]').textContent = currency.format(deliveryTax);
  document.querySelector('[data-total="discount"]').textContent = `−${currency.format(discount)}`;
  document.querySelector('.discount-row').hidden = !discount;
  document.querySelector('[data-total="grand"]').textContent = currency.format(total);
  // An order can only be placed when the cart contains at least one item.
  placeOrderButton.disabled = !checkoutItems.length;
  if (checkoutItems.length) {
    localStorage.setItem('MishriCheckoutItem', JSON.stringify(checkoutItems));
  } else {
    localStorage.removeItem('MishriCheckoutItem');
  }
}

couponButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const coupon = button.dataset.coupon;
    const foodTotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (coupon === 'Mishri50' && foodTotal < 300) {
      activeCoupon = '';
      couponButtons.forEach((option) => {
        option.classList.remove('is-selected');
        option.setAttribute('aria-pressed', 'false');
      });
      couponMessage.textContent = 'Mishri50 applies to food totals of ₹300 or more.';
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
  if (!savedAddress) {
    orderMessage.textContent = 'Please add and save your delivery address before placing the order.';
    addressForm.hidden = false;
    addressEditButton.setAttribute('aria-expanded', 'true');
    addressEditButton.querySelector('span').textContent = 'Close form';
    addressForm.elements.name.focus();
    return;
  }

  const order = {
    id: `M-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'Order confirmed',
    items: checkoutItems.map((item) => ({ ...item })),
    itemName: checkoutItems.map((item) => item.name).join(', '),
    quantity: checkoutItems.reduce((sum, item) => sum + item.quantity, 0),
    total: checkoutTotal,
    coupon: activeCoupon || null,
    address: { ...savedAddress }
  };

  try {
    previousOrders = [order, ...previousOrders].slice(0, 50);
    localStorage.setItem(orderStorageKey, JSON.stringify(previousOrders));
    localStorage.removeItem('MishriCheckoutItem');
  } catch {
    orderMessage.textContent = 'Could not save the order in this browser. Check storage settings and try again.';
    return;
  }

  console.info('Mishri order saved for tracking:', {
    id: order.id,
    createdAt: order.createdAt,
    status: order.status,
    items: order.items,
    quantity: order.quantity,
    total: order.total,
    deliveryArea: `${order.address.city}, ${order.address.region}`
  });
  orderMessage.textContent = 'Order saved in this browser. Restaurant and courier updates are not connected.';
  renderOrderTracking(order);
  checkoutItems = [];
  updateCheckout();
  orderTrackingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelectorAll('.promo-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('.promo-banner').remove());
});

if (previousOrders.length) {
  renderOrderTracking(previousOrders[0]);
}
window.setInterval(() => {
  if (previousOrders.length) renderOrderTracking(previousOrders[0]);
}, 15_000);
updateCheckout();
