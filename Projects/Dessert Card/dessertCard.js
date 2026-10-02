const card = [
  {
    dessertImg: 'https://tinyurl.com/yuhvn4bv',
    category: 'Waffles',
    dessertName: 'waffle with Berries',
    dessertPrice: '149'
  },
  {
    dessertImg: 'https://tinyurl.com/2x5w47b7',
    category: 'Creme Brulee',
    dessertName: 'Vanilla Bean Creme Brulee',
    dessertPrice: '248'
  },
  {
    dessertImg: 'https://tinyurl.com/4ycepybf',
    category: 'Macaron',
    dessertName: 'Macaron Mix of Five',
    dessertPrice: '49'
  },
  {
    dessertImg: 'https://tinyurl.com/bdeah7uh',
    category: 'Oats',
    dessertName: 'Bowl of Cereal',
    dessertPrice: '342'
  },
  {
    dessertImg: 'https://tinyurl.com/46dh7nwz',
    category: 'Indian Sweet',
    dessertName: 'Jalebi',
    dessertPrice: '183'
  },
  {
    dessertImg: 'https://tinyurl.com/ppyzjhky',
    category: 'Panna Cotta',
    dessertName: 'Vanillla Panna Cotta',
    dessertPrice: '458'
  },
  {
    dessertImg: 'https://tinyurl.com/yhkcdknw',
    category: 'Tiramisu',
    dessertName: 'Classic Tiramisu',
    dessertPrice: '346'
  },
  {
    dessertImg: 'https://tinyurl.com/3dzw8a8e',
    category: 'Waffle',
    dessertName: 'Waffle with Chocolates',
    dessertPrice: '193'
  }
];

const dessertCards = document.querySelectorAll('.dessert-card');

card.forEach((cardIteam, index) => {
  const dessertCard = dessertCards[index];
  if (!dessertCard) return;

  dessertCard.innerHTML = `

  <div class="dessert-card-image">
    <img class="dessert-img" src="${cardIteam.dessertImg}" alt="waffle with barriess" />
  </div>
  <button class="add-to-cart js-add-to-cart" type="submit">
   <svg xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c18351"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-shopping-cart-plus preview-icon shopping-cart-plus">
      <path d="M16 5h6" />
      <path d="M19 2v6" />
      <path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" />
      <path d="M4.564 5H12" />
      <path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
    Add to Cart</button>
  <div class="dessert-card-info">
    <span class="dessert-catorigies">
    ${cardIteam.category}
    </span>
    <span class="dessert-name">
     ${cardIteam.dessertName}
    </span>
    <div class="price-box">
      <span class="price">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8a9609"
          stroke-width="2.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-indian-rupee preview-icon">
          <path d="M6 3h12" />
          <path d="M6 8h12" />
          <path d="m6 13 8.5 8" />
          <path d="M6 13h3" />
          <path d="M9 13c6.667 0 6.667-10 0-10" />
        </svg>
        <span class="price-tag">
        ${cardIteam.dessertPrice}
        </span>
      </span>
    </div>
  </div>
 `;
});




document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const isAdded = button.classList.toggle('added');
    const icon = button.querySelector('svg');

    button.textContent = isAdded ? 'Added!' : 'Add to Cart';
    if (icon) {
      button.prepend(icon);
    }
    button.setAttribute('aria-pressed', String(isAdded));
  });
});




