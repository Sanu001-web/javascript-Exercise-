// 17A
class Car {
  brand;
  model;
  speed = 0;
  constructor(carDetail) {
    this.brand = carDetail.brand;
    this.model = carDetail.model;
  }
  // 17B
  displayInfo() {
    console.log(`${this.brand} ${this.model} Speed: ${this.speed} km/h`);
  
  }
// console.log('------17C----------x-----');
  go() {
    this.speed += 5;
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  brake() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
})

console.log(car1);
console.log(car2);
document.querySelector('.js-delivery-date-weekedd').innerHTML = `${car1.brand} ${car1.model}`;

// 17B
car1.displayInfo();
car2.displayInfo();
console.log('------17C----------x-----');
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();


car2.displayInfo();
car2.go();
car2.brake();
