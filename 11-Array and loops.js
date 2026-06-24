const helloArray = [2, 23, 65, 78, 55, 886]
console.log(helloArray);

console.log(helloArray[5])

helloArray[5] = 0;
console.log(helloArray);

const animal = ['tiger', 'dog', 'elephant', 'monkey', 'cat'];
console.log(animal);

const diffArrary = [18, 'tiger', false, [45, 1818], { name: 'shaan' }]
console.log(diffArrary);
diffArrary.push('hello tiger')
console.log(diffArrary.length);
console.log(diffArrary);

helloArray.splice(2, 0);
console.log(helloArray);




// vvvv-vvvvvvvvv---------daiya*2re-----vvvvvvvvvvv---------vvvv
console.log('part(II)');

const array1 = [1, 2, 3, 4];
console.log(array1);
const array2 = array1.slice();
console.log(array2);
array2.push(18);
console.log(array1);
console.log(array2);
const [firstValue, thirdValue] = [18, 7, 45, 88, 99]

console.log(firstValue, thirdValue);
console.log('break&continue')
for (let p = 0; p <= 15; p++) {
  if (p % 2 === 0) {
    continue;
  }
  console.log(p);
  if (p === 7) {
    break;
  }
}

console.log('1 to 10 number using while')
let f = 0;
while (f <= 10) {
  // if(f%3===0){
  // f++;
  //   continue;
  // don't run this
  // }
  console.log(f);
  f++;
}

function dublenumbers(numbers){
const dnums = [];
for (let w = 0; w < numbers.length; w++) {
  const number = numbers[w];
  if(number===0){
    return dnums;
  }
  dnums.push(number * 2);
}
return dnums;
}
console.log((dublenumbers([1,2,3,4,7])));
console.log((dublenumbers([69,99,45 ,0,18,7])));
