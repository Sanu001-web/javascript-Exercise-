import { cart } from '/data/cart.js';
import { getProduct } from '/data/products.js';
import { getDeliveryOption } from '/data/deliveryOptions.js';
import { formatCurrency } from '/utils/money.js';



export function randderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    if (!product) {
      return;
    }

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



  const paymentSummaryHTML = `
 <div class="payment-summary-title">
            Order Summary
          </div>

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

          <div class="added-to-cart js-place-order-button">
              <img src="https://tinyurl.com/y9uhfv8f">
              Order successfully placed
          </div>
          <button class="place-order-button  button-primary">
            Place your order
          </button>
`;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
randderPaymentSummary();


addEventListener('click', () => {

  let addedMessageTimeoutId;
  let addedMessage = document.querySelector('.js-place-order-button');

  addedMessage.classList.add('added-to-cart-visible');
  if (addedMessageTimeoutId) {
    clearTimeout(addedMessageTimeoutId);
  }

  const timeoutId = setTimeout(() => {
    addedMessage.classList.remove('added-to-cart-visible');
  }, 1500);

  // Save the timeoutId so we can stop it later.
  addedMessageTimeoutId = timeoutId;
});
