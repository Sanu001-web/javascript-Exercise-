const product = [
  {
    image: 'https://tinyurl.com/u3h63zff',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      starsImg:'https://tinyurl.com/3ypcm837',
      start: 4.5,
      count: 87
    },
    priceCent: 1092
  }, {
    image: 'https://tinyurl.com/479fmjbs',
    name: 'Intermediate Size Basketball',
    rating: {
      starsImg:'https://tinyurl.com/8krsstx3',
      stars: 3,
      count: 127
    },
    priceCent: 2095
  }, {
    image: 'https://tinyurl.com/ys9fkmj3',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      starsImg:'https://tinyurl.com/3ypcm837',
      stars: 4.5,
      count: 56
    },
    priceCent: 799
  }, {
    image: 'https://tinyurl.com/3dnydjbv',
    name: 'Black Athletic Cotton Beg -Men',
    rating: {
      starsImg:'https://tinyurl.com/3ypcm837',
      stars: 4.5,
      count: 96
    },
    priceCent: 1590
  }, {
    image: 'https://tinyurl.com/4rnrzu69',
    name: 'Black and Gray Athletic Cotton Shoes',
    rating: {
      starsImg:'https://tinyurl.com/3ypcm837',
      stars: 4.5,
      count: 155
    },
    priceCent: 5090
  }
]

product.forEach((product) => {
  const html =
    `
<div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
              src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
              src="${product.rating.starsImg}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${product.priceCent/100}
      </div>

      <div class="product-quantity-container">
        <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
            Added
      </div>

      <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
    </div>
`
console.log(html);
})
