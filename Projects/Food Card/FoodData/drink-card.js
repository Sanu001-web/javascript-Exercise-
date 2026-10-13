export const drinks = [
  {
    producId: 'b8be5000-06af-49aa-95cd-4cc4d636f7ab',
    dessertImg: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Mango Smoothie',
    dessertPrice: '189'
  },
  {
    producId: 'fcb2586d-7e3c-4a26-b505-07831c960027',
    dessertImg: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Iced Coffee',
    dessertPrice: '159'
  },
  {
    producId: '06af1def-fac6-43d6-a661-32380de81675',
    dessertImg: 'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Fresh Mint Lemonade',
    dessertPrice: '129'
  },
  {
    producId: 'bfa8d71c-344f-4e3b-a99f-b26df358eaf4',
    dessertImg: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Fresh Orange Juice',
    dessertPrice: '149'
  }
];

export const drinkCards = document.querySelectorAll('.drinks-container-sec .dessert-card');

export function renderDrinkCard() {
  drinks.forEach((drink, index) => {
    const drinkCard = drinkCards[index];
    if (!drinkCard) return;

    drinkCard.innerHTML = `
  <div class="dessert-card-image">
    <img class="dessert-img" src="${drink.dessertImg}" alt="${drink.dessertName}" />
  </div>
  <button class="add-to-cart js-add-to-cart" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c18351" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M16 5h6" /><path d="M19 2v6" /><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" /><path d="M4.564 5H12" /><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041" /><circle cx="18" cy="20" r="2" /><circle cx="8" cy="20" r="2" />
    </svg>
    Add to Cart
  </button>
  <div class="dessert-card-info">
    <span class="dessert-catorigies">${drink.category}</span>
    <span class="dessert-name">${drink.dessertName}</span>
    <div class="price-box">
      <span class="price">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a9609" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" />
        </svg>
        <span class="price-tag">${drink.dessertPrice}</span>
      </span>
    </div>
  </div>
 `;
  });
}
