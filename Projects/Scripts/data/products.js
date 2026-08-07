import { formatCurrency } from '/utils/money.js';

const IMAGE_BASE_URL = 'https://supersimple.dev/projects/amazon/';

export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getImageUrl() {
    if (this.image.startsWith('http')) {
      return this.image;
    }
    return `${IMAGE_BASE_URL}${this.image}`;
  }

  getStarsUrl() {
  return `https://supersimple.dev/projects/amazon/images/ratings/rating-${this.rating.stars * 10}.png`;
}

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `<a class="tshirt-sizeChartLink" href="${this.sizeChartLink}" target="_blank">size chart</a>`;
  }
}

class Appliances extends Product {
  instructionsLink;
  warrantyLink;

  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.instructionsLink}" target="_blank">Instructions</a>
      <br>
      <a href="${this.warrantyLink}" target="_blank">Warranty</a>
    `;
  }
}

export let products = [];

export function loadProductsFetch() {
  const promise = fetch('https://supersimplebackend.dev/products')
    .then((response) => response.json())
    .then((productData) => {
      products = productData.map((productDetails) => {
        if (productDetails.type === 'clothing') {
          return new Clothing(productDetails);
        } else if (productDetails.type === 'appliances') {
          return new Appliances(productDetails);
        }
        return new Product(productDetails);
      });
      console.log('load products');
    }).catch((error)=>{
      console.log("Unexpected error. Please try again later2");
    });

  return promise;
}

export function loadProducts(abcd) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      } else if (productDetails.type === 'appliances') {
        return new Appliances(productDetails);
      }
      return new Product(productDetails);
    });
    abcd();
  });

xhr.addEventListener('error',(error)=>{
console.log("Unexpected error. Please try again later");
});

  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
}

