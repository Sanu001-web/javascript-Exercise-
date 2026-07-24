import {cart} from '/data/cart.js';

export function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  
  const checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="index.html">
          <img class="amazon-logo" src="https://tinyurl.com/mcws58pr">
            <img class="amazon-mobile-logo" src="https://tinyurl.com/y4vd3x6v">
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link"
          href="index.html">${cartQuantity} items</a>)
      </div>

      <div class="checkout-header-right-section">
          <img src="https://tinyurl.com/mpf5p4f2">
      </div>
    </div>
  `;

  document.querySelector('.js-checkout-header')
    .innerHTML = checkoutHeaderHTML;
}
