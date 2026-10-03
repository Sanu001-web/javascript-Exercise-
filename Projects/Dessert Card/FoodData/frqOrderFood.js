export const frequentlyOrderFood = [
  {
    producId: '02d62a07-0462-47ec-9e99-f561f734d745',
    fOrderFoodImg: 'https://tinyurl.com/4pbdd47t',
    category: 'Waffles',
    fOrderFoodName: 'Waffle with Berries',
    fOrderFoodPrice: '149'
  },
  {
    producId: 'b5def8a8-7418-46a7-9dfe-de4b84b31cc3',
    fOrderFoodImg: 'https://tinyurl.com/yd52cmj4',
    category: 'Creme Brulee',
    fOrderFoodName: 'Vanilla Bean Creme Brulee',
    fOrderFoodPrice: '248'
  },
  {
    producId: '85d2f172-2a13-45eb-ab05-13aadfc414c5',
    fOrderFoodImg: 'https://tinyurl.com/4sx6w4wz',
    category: 'Macaron',
    fOrderFoodName: 'Macaron Mix of Five',
    fOrderFoodPrice: '49'
  },
  {
    producId: '31843dda-3e24-4a14-a01c-de65e0ddec6d',
    fOrderFoodImg: 'https://tinyurl.com/2s3hnmfa',
    category: 'Oats',
    fOrderFoodName: 'Bowl of Cereal',
    fOrderFoodPrice: '342'
  },
  {
    producId: '2496692a-f079-4275-9104-b66691f5741e',
    fOrderFoodImg: 'https://tinyurl.com/3xyhcxfz',
    category: 'Indian Sweet',
    fOrderFoodName: 'Jalebi',
    fOrderFoodPrice: '183'
  },
  {
    producId: '6174aed5-e494-4f5e-9e83-10ac9ad157ed',
    fOrderFoodImg: 'https://tinyurl.com/7t2t5872',
    
    category: 'Panna Cotta',
    fOrderFoodName: 'Vanilla Panna Cotta',
    fOrderFoodPrice: '458'
  },
  {
    producId: '86288b07-78de-4330-9205-486f4d94ff02',
    fOrderFoodImg: 'https://tinyurl.com/yeyp9zs8',
    category: 'Tiramisu',
    fOrderFoodName: 'Classic Tiramisu',
    fOrderFoodPrice: '346'
  },
  {
    producId: '4d8b9d04-1d5b-4a52-a2d9-19795363e63b',
    fOrderFoodImg: 'https://tinyurl.com/yawfzvn7',
    category: 'Waffle',
    fOrderFoodName: 'Waffle with Chocolates',
    fOrderFoodPrice: '193'
  }
];

export const frqntlyOrderFoods = document.querySelectorAll('.frqntly-order-food-card');
export function renderfrquntOrderFoodCard() {


  frequentlyOrderFood.forEach((fOrderFoodIteam, index) => {
    const frqntlyOrderFood = frqntlyOrderFoods[index];
    if (!frqntlyOrderFood) return;

    frqntlyOrderFood.innerHTML = `

  <div class="fOrderFood-card-image">
    <img class="fOrderFood-img" src="${fOrderFoodIteam.fOrderFoodImg}" alt="${fOrderFoodIteam.fOrderFoodName}" />
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
  <div class="fOrderFood-card-info">
    <span class="fOrderFood-catorigies">
    ${fOrderFoodIteam.category}
    </span>
    <span class="fOrderFood-name">
     ${fOrderFoodIteam.fOrderFoodName}
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
        ${fOrderFoodIteam.fOrderFoodPrice}
        </span>
      </span>
    </div>
  </div>
 `;
  });

}

