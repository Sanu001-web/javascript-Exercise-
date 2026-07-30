// import { deliveryOptions } from '/data/deliveryOptions.js';

let storedCart = JSON.parse(localStorage.getItem('cart'));

export let cart = Array.isArray(storedCart) ? storedCart : [];

if (!cart.length === 0) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];

  saveTOLocalStorage();
}




function saveTOLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart.length;
}


export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
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
      quantity,
      deliveryOptionId: '2'
    });
  }
  saveTOLocalStorage();
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveTOLocalStorage();
}


export function calculateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;

}

export function upadteQuantity(productId, newQuantity) {

  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;
  saveTOLocalStorage();
}


export function updateDeliveryOption(productId,deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;
  saveTOLocalStorage();
}
