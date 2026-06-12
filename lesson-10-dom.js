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
function subscribe() {
  const jsBtnElem = document.querySelector('.js-subs-btn');
  //  console.log(jsBtnElem);
  if (jsBtnElem.innerText === 'Subscribe') {
    jsBtnElem.innerHTML = 'Subscribed';
    jsBtnElem.classList.add('is-sub-btn');
  }
  else {
    jsBtnElem.innerHTML = 'Subscribe';
    jsBtnElem.classList.remove('is-sub-btn');
  }
}
