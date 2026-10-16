export const drinks = [
  {
    producId: 'b8be5000-06af-49aa-95cd-4cc4d636f7ab',
    dessertImg: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Mango Smoothie',
    dessertPrice: '189',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-5.png',
      count: '246'
    }
  },
  {
    producId: 'fcb2586d-7e3c-4a26-b505-07831c960027',
    dessertImg: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Iced Coffee',
    dessertPrice: '159'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-35.png',
      count: '211'
    }
  },
  {
    producId: '06af1def-fac6-43d6-a661-32380de81675',
    dessertImg: 'https://tinyurl.com/bdc4ks9m',
    category: 'Drinks',
    dessertName: 'Fresh Mint Lemonade',
    dessertPrice: '129'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '345'
    }
  },
  {
    producId: 'bfa8d71c-344f-4e3b-a99f-b26df358eaf4',
    dessertImg: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    dessertName: 'Fresh Orange Juice',
    dessertPrice: '109'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-3.png',
      count: '121'
    }
  },
  {
    producId: '5e2e3bad-2cef-4841-b6d5-92ec9c131c74',
    dessertImg: 'https://tinyurl.com/3berashx',
    category: 'Drinks',
    dessertName: 'Masala Chai',
    dessertPrice: '27'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-5.png',
      count: '1245'
    }
  },
  {
    producId: 'f786fd3c-2e4c-44b0-9d7d-862ce439badd',
    dessertImg: 'https://tinyurl.com/2s4ev39e',
    category: 'Drinks',
    dessertName: 'Mango Lassi',
    dessertPrice: '67'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '845'
    }
  },
  {
    producId: '76b3a6b0-35d4-4d5d-a112-2edf3922902a',
    dessertImg: 'https://tinyurl.com/8m89ews3',
    category: 'Drinks',
    dessertName: 'Chaas (Mattha)',
    dessertPrice: '23'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '543'
    }
  },
  {
    producId: '5bced249-7865-4f2d-a552-f98b1cef8b69',
    dessertImg: 'https://tinyurl.com/yc7hkr7a',
    category: 'Drinks',
    dessertName: 'Nimbu Pani',
    dessertPrice: '17'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '543'
    }
  },
  {
    producId: '5bced249-7865-4f2d-a552-f98b1cef8b69',
    dessertImg: 'https://tinyurl.com/33rkdb42',
    category: 'Drinks',
    dessertName: 'Cold Brew Coffee',
    dessertPrice: '49'
    ,
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '543'
    }
  }
];

export let drinkCards = [];


export function renderDrinkCard() {

  const container = document.querySelector('.drinks-container-sec');
  if (!container) return;

  container.querySelectorAll('.dessert-card').forEach((drinkCard) =>
    drinkCard.remove());
  drinkCards = [];

  drinks.forEach((drink) => {
    const drinkCard = document.createElement('div');
    drinkCard.className = 'dessertCard';

    drinkCard.innerHTML = `<div class="dessert-card-image">
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
    ${drink.rating ? `
    <div>
      <img class="rating-icons" src="${drink.rating.stars}" alt="" />
      <span class="dessert-name">${drink.rating.count}</span>
    </div>` : ''}
    <div class="price-box">
      <span class="price">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a9609" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" />
        </svg>
        <span class="price-tag">${drink.dessertPrice}</span>
      </span>
    </div>
  </div>`;

    container.append(drinkCard);
    drinkCards.push(drinkCard);
  });
}
