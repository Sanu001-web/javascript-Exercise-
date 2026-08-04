// export let cart = Array.isArray(storedCart) ? storedCart : [];
// let storedCart = JSON.parse(localStorage.getItem('cart')); 

class Cart {
  cartItem;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItem = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItem) {
      this.cartItem = [
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        },
        {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      this.saveTOLocalStorage();
    }
  }

  saveTOLocalStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItem));
    // return cart.length;
  }

  addToCart(productId) {
    let matchingItem;
    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = quantitySelector ? Number(quantitySelector.value) : 1;
    // const quantity = Number(quantitySelector.value);


    if (matchingItem) {
      // matchingItem.quantity += 1;
      matchingItem.quantity += quantity;
    } else {
      this.cartItem.push({
        // productId:productId, so use shorhand method 
        productId,
        // quantity: 1
        quantity,
        deliveryOptionId: '2'
      });
    }
    this.saveTOLocalStorage();
  }


  removeFromCart(productId) {
    const newCart = [];

    this.cartItem.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItem = newCart;
    this.saveTOLocalStorage();
  }


  removeFromCart(productId) {
    const newCart = [];

    this.cartItem.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItem = newCart;
    this.saveTOLocalStorage();
  }

  calculateCartQuantity() {
    let cartQuantity = 0;
    this.cartItem.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;

  }

  upadteQuantity(productId, newQuantity) {

    let matchingItem;
    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    matchingItem.quantity = newQuantity;
    saveTOLocalStorage();
  }


  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveTOLocalStorage();
  }

}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



console.log(cart);
console.log(businessCart);



