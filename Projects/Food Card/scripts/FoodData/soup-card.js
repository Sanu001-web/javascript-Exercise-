export const soups = [
  {
    producId: '4398322c-1c01-4e3e-8d96-d73837158f0d',
    dessertImg: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    category: 'Soups',
    dessertName: 'Creamy Tomato Soup',
    dessertPrice: '179',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-5.png',
      count: '321'
    }
  },
  {
    producId: 'e52088df-3b42-4a54-af43-0594fc02bbb0',
    dessertImg: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80',
    category: 'Soups',
    dessertName: 'Garden Vegetable Soup',
    dessertPrice: '199',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '321'
    }
  },
  {
    producId: 'b6fd2eca-4c04-41ca-8d4e-b36fd889cc11',
    dessertImg: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    category: 'Soups',
    dessertName: 'Spiced Lentil Soup',
    dessertPrice: '189',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-4.png',
      count: '321'
    }
  },
  {
    producId: '9e5d5867-7808-46b0-a364-cb43c78d683d',
    dessertImg: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=80',
    category: 'Soups',
    dessertName: 'Hearty Mushroom Soup',
    dessertPrice: '219',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-35.png',
      count: '321'
    }
  },
  {
    producId: '36fa376e-e2d8-4b1f-bae8-34c4be9a3fb3',
    dessertImg: 'https://tinyurl.com/3jsw4zf5',
    category: 'Soups',
    dessertName: 'Sweet Corn Soup',
    dessertPrice: '192',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-4.png',
      count: '121'
    }
  },
  {
    producId: '4e0df4b8-251d-4d0f-a9a6-46a0466c3e1a',
    dessertImg: 'https://tinyurl.com/2dt8f5hu',
    category: 'Soups',
    dessertName: 'Palak Shorba',
    dessertPrice: '122',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '221'
    }
  },
  {
    producId: 'ba1e228a-2253-448d-a445-54481bb5c262',
    dessertImg: 'https://tinyurl.com/5wuu55nv',
    category: 'Soups',
    dessertName: 'Borscht — Eastern Europe',
    dessertPrice: '109',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '197'
    }
  },
  {
    producId: 'edac8833-9070-46ba-8404-bb8991b30747',
    dessertImg: 'https://tinyurl.com/3ttjujku',
    category: 'Soups',
    dessertName: 'Goulash Soup — Hungary',
    dessertPrice: '189',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-5.png',
      count: '237'
    }
  },
  {
    producId: '22eec143-6c8c-4528-bd4a-62919e34eef8',
    dessertImg: 'https://tinyurl.com/ey2brjxb',
    category: 'Soups',
    dessertName: 'Broccoli Cheddar Soup-America',
    dessertPrice: '109',
    rating: {
      stars: 'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
      count: '197'
    }
  }
];

export let soupCards = [];

export function renderSoupCard() {
  const container = document.querySelector('.soups-container-sec');
  if (!container) return;

  // Remove the empty placeholder cards in the HTML before rendering the data.
  container.querySelectorAll('.dessert-card').forEach((soupCard) => soupCard.remove());
  soupCards = [];

  soups.forEach((soup) => {
    const soupCard = document.createElement('div');
    soupCard.className = 'dessert-card';
    soupCard.innerHTML = `
      <div class="dessert-card-image">
        <img class="dessert-img" src="${soup.dessertImg}" alt="${soup.dessertName}" />
      </div>
      <button class="add-to-cart js-add-to-cart" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c18351" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M16 5h6" /><path d="M19 2v6" /><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" /><path d="M4.564 5H12" /><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041" /><circle cx="18" cy="20" r="2" /><circle cx="8" cy="20" r="2" />
        </svg>
        Add to Cart
      </button>
      <div class="dessert-card-info">
        <span class="dessert-catorigies">${soup.category}</span>
        <span class="dessert-name">${soup.dessertName}</span>
        ${soup.rating ? `
        <div>
          <img class="rating-icons" src="${soup.rating.stars}" alt="" />
          <span class="dessert-name">${soup.rating.count}</span>
        </div>` : ''}
        <div class="price-box">
          <span class="price">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a9609" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" />
            </svg>
            <span class="price-tag">${soup.dessertPrice}</span>
          </span>
        </div>
      </div>
    `;

    container.append(soupCard);
    soupCards.push(soupCard);
  });
}
