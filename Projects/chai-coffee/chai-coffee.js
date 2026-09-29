const prices = {
  espresso: 2.5,
  latte: 3.8,
  cappuccino: 3.7,
  matcha: 4.5,
  chai: 5,
  small: 0,
  medium: 0.5,
  large: 1.5,
  extrashot: 0.75,
  vanilla: 0.6,
  whipped: 0.6,
  caramel: 0.5
};

const labels = {
  espresso: 'Espresso',
  latte: 'Latte',
  cappuccino: 'Cappuccino',
  matcha: 'Matcha',
  chai: 'Chai',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  regular: 'Regular Milk',
  oat: 'Oat Milk',
  soy: 'Soy Milk',
  almond: 'Almond Milk',
  'no milk': 'No Milk',
  extrashot: 'Extra Shot',
  vanilla: 'Vanilla Syrup',
  whipped: 'Whipped Cream',
  caramel: 'Caramel Syrup'
};

const drinkColors = {
  espresso: '#1e0c04',
  latte: '#7b4f2e',
  cappuccino: '#b07442',
  matcha: '#4a7c3f',
  chai: '#b5812a'
};

const milkColors = {
  regular: '#f1e2cc',
  oat: '#d7b88b',
  soy: '#f3df9c',
  almond: '#c99b69'
  
};

const sizeHeights = {
  small: '40%',
  medium: '65%',
  large: '90%'
};

const summaryItems = document.querySelector('.summary-items');
const summaryPrice = document.querySelector('.summary-price');
const cupFill = document.querySelector('.cup-fill');

function selectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function renderSummary() {
  const drink = selectedValue('drink');
  const size = selectedValue('size');
  const milk = selectedValue('milk');
  const extras = [...document.querySelectorAll('input[name="extras"]:checked')];
  let total = 0;

  const rows = [
    { label: labels[drink], price: prices[drink] },
    { label: labels[size], price: prices[size] },
    { label: labels[milk], price: 0 },
    ...extras.map((extra) => ({
      label: labels[extra.value],
      price: prices[extra.value]
    }))
  ];

  summaryItems.replaceChildren();
  rows.forEach(({ label, price }) => {
    total += price;
    const row = document.createElement('div');
    row.className = 'summary-row';

    const itemLabel = document.createElement('span');
    itemLabel.textContent = label;
    const itemPrice = document.createElement('span');
    itemPrice.textContent = price === 0 ? '—' : `+$${price.toFixed(2)}`;
    row.append(itemLabel, itemPrice);
    summaryItems.append(row);
  });

  summaryPrice.textContent = `$${total.toFixed(2)}`;
  const milkColor = milkColors[milk];
  cupFill.style.backgroundColor = drink === 'chai' && milk === 'no milk'
    ? '#000000'
    : milkColor
      ? `color-mix(in srgb, ${drinkColors[drink]} 70%, ${milkColor} 30%)`
      : drinkColors[drink];
  cupFill.style.height = sizeHeights[size];
}

document.querySelectorAll('.panel input').forEach((input) => {
  input.addEventListener('change', renderSummary);
});

renderSummary();
