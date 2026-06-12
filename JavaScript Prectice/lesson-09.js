console.log(document.querySelector('button'));
document.querySelector('.bnine').innerHTML = '9b done';



// 9d solution 
function showName() {
  const inputElement = document.querySelector('.js-name-text');
  document.querySelector('.js-name-show')
    .innerHTML = `Your name is: ${inputElement.value}`;
}

function handleNameKeydown(event) {
  if (event.key === 'Enter') {
    showName();
  }
}

// 9g,9h

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const innerInput = document.querySelector('.js-cost-input');
  let cost = Number(innerInput.value);

  if (cost < 40) {
    cost = cost + 10;
  }
  document.querySelector('.js-show-value').
    innerHTML = `$${cost}`;

}

function typeName() {
  const inputElement = document.querySelector('.js-input');
  document.querySelector('.js-message')
    .innerHTML = inputElement.value;
}





let cartQuantity = 0;
displayCartQuantity();
function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    alert('The cart is full');
    return;
  }
  if (cartQuantity + change < 0) {
    alert('Not enough items in the cart');
    return;
  }

  cartQuantity += change;
  // console.log(`Cart Quantity : ${cartQuantity}`);
  displayCartQuantity();
}

function displayCartQuantity() {
  document.querySelector('.js-cart-quantit').innerHTML
    = `Cart Quantity : ${cartQuantity}`
}



let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  calculationBar();
  localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function calculationBar(){
 document.querySelector('.js-calcution-bar').innerHTML =`${calculation}`;
}
