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


function typeName(value){

  const innerInput = document.querySelector('.js-input');
  document.querySelector('.js-message').innerInput = `${
    innerInput.value
}
