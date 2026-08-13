import { cart, clearCart } from '/data/cart.js';
import { getProduct } from '/data/products.js';
import { getDeliveryOption } from '/data/deliveryOptions.js';
import { formatCurrency } from '/utils/money.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    if (!product) return;

    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPriceCents + shippingPriceCents;
  const estimatedTax = totalBeforeTax * 0.1;
  const orderTotal = totalBeforeTax + estimatedTax;

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-payment-summary').innerHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items (${cartQuantity}):</div>
      <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
    </div>

    <div class="js-place-order-message added-to-cart">
      <img src="https://tinyurl.com/y9uhfv8f">
      Your order is placed
    </div>

    <button class="place-order-button button-primary js-order-place-Items js-place-order-button">
      Place your order
    </button>
  `;

  let addedMessageTimeoutId;

  document.querySelector('.js-place-order-button').addEventListener('click', async () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const addedMessage = document.querySelector('.js-place-order-message');
    addedMessage.classList.add('added-to-cart-visible');

    if (addedMessageTimeoutId) {
      clearTimeout(addedMessageTimeoutId);
    }

    addedMessageTimeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 1500);

    try {
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
      });

      const order = await response.json();

      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem(
        'orders',
        JSON.stringify([order, ...savedOrders])
      );

      clearCart(); // clear the cart after we make our order placed

      setTimeout(() => {
        window.location.href = 'orders.html';
      }, 1500);
    } catch (error) {
      console.log('Unexpected error. Try again later.', error);
    }
  });
}
