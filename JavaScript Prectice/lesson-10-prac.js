// let test = document.querySelector('.text-btn');
// console.log(test.classList.contains('text-btn'));

function gameToggle() {
  const toggled = document.querySelector('.g-game');
  if (!toggled.classList.contains('is-toggled')) {
    // toggled.innerHTML= 'Gaming';
    toggled.classList.add('is-toggled');
  }
  else {
    toggled.classList.remove('is-toggled');
    // toggled.innerHTML= 'Game over';
  }
}

function multiSwitches(selector) {
  const toggle = document.querySelector(selector);
  if (!toggle.classList.contains('is-switch-btn')) {
    turnOnOfBtn();
    toggle.classList.add('is-switch-btn');
  }
  else {
    toggle.classList.remove('is-switch-btn');
  }
}
function turnOnOfBtn() {
  const previousButton = document.querySelector('.is-switch-btn');
  if (previousButton) {
    previousButton.classList.remove('is-switch-btn')
  }

}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  

  if(cost <=0){
    document.querySelector('.invailid-value')
    .innerHTML = `Error:cost cannot be less than $0`
    return;
  }

  if (cost < 40) {
    cost = cost + 10;
  }
  

  document.querySelector('.js-show-value')
  .innerHTML = `$${cost}`;
}



