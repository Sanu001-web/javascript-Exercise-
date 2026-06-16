
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

function calculationBar() {
  document.querySelector('.js-calcution-bar').innerHTML = `${calculation}`;
}
