import {cart} from '/cart.js'
import {products} from '/products.js'


let productsHTML = '';

products.forEach((product) => {
  productsHTML +=
    `
<div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
              src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
              src="${product.rating.starsImg}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
      </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class ="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

      
           <div class="added-to-cart js-added-to-cart-${product.id}">
              <img src="https://tinyurl.com/y9uhfv8f">
              Added
          </div>

         <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
            Add to Cart
          </button>
    </div>
`
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    let addedMessageTimeoutId;

    button.addEventListener('click', () => {
      // const productId = button.dataset.productId; so , use destructuring method
      const { productId } = button.dataset;
      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      // const quantity = quantitySelector.value;
      const quantity = Number(quantitySelector.value);

      if (matchingItem) {
        // matchingItem.quantity += 1;
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          // productId:productId, so use shorhand method 
          productId,
          // quantity: 1
          quantity
        });
      }


      let cartQuantit = 0;

      cart.forEach((item) => {
        cartQuantit += item.quantity;
      });

      document.querySelector(".js-cart-quantity")
        .innerHTML = cartQuantit;



      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );

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
  });

