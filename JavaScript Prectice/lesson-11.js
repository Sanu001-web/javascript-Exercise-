const helloArray = [2,23,65,78,55,886]
console.log(helloArray);

console.log(helloArray[5])

helloArray[5] = 0;
console.log(helloArray);

const animal =['tiger','dog','elephant','monkey','cat'];
console.log(animal);

const diffArrary = [18,'tiger',false,[45,1818],{name: 'shaan'}]
console.log(diffArrary);
diffArrary.push('hello tiger')
console.log(diffArrary.length);
console.log(diffArrary);

helloArray.splice(2,0);
console.log(helloArray);



// 11d,e,f

for(let i=0; i<10;i+=2){
console.log(i);
}

for(let i=5; i>=0;i--){
console.log(i);
}


let j=0;
while(j<=10){
console.log(j);
    j+=2;
}

let z = 5;
while(z>=0){
    console.log(z);
    z--;
}
    // 11g solution
    const nums = [1,2,3]
const rslt=[];
for (let i = 0; i < nums.length; i++) {
    rslt.push(nums[i]+1)
}
console.log(rslt);

    // 11h solutionis

    function addOne(array) {
    const reslt=[];
    for (let k = 0; k < array.length; k++) {
    reslt.push(array[k]+1)
}
return reslt;
    
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));

// vvvvvvv-----------------vvvvvvvvvvvv------

const helloArray = [2, 23, 65, 78, 55, 886]
console.log(helloArray);

console.log(helloArray[5])


helloArray[5] = 18;
console.log(helloArray);

const animal = ['tiger', 'dog', 'elephant', 'monkey', 'cat'];
console.log(animal);


const diffArrary = [18, 'tiger', false, [45, 1818], { name: 'shaan' }]
console.log(diffArrary);
diffArrary.push('hello tiger');
console.log(diffArrary.length);

console.log(helloArray);
helloArray.splice(0, 2);
console.log(helloArray);

console.log('11-B')
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([25, 21, 124, 11, 69]));
console.log(getLastValue(['heelo', 'hii', 'byeii']));


console.log('11-C');
function arraySwap(swapArray) {
  const lastIndexx = swapArray.length - 1;

  const lastValue = swapArray[lastIndexx];
  const firstValue = swapArray[0];

  swapArray[0] = lastValue;
  swapArray[lastIndexx] = firstValue;
  return swapArray;
}
console.log(arraySwap([18, 45, 7, 99]));

console.log('11-D,E,F')
// 11d,e,f

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

console.log('11-E');

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log('11-D,11-F while loop');

let j = 0;
while (j <= 10) {
  console.log(j);
  j += 2;
}

console.log('11-E,11-F while loop');
let z = 5;
while (z >= 0) {
  console.log(z);
  z--;
}
console.log('11-G loop');
// 11g solution
const nums = [1, 2, 3]
const rslt = [];
for (let i = 0; i < nums.length; i++) {
  rslt.push(nums[i] + 1)
}
console.log(rslt);

// 11h solutionis
console.log('11-H solutionis')

function addOne(array) {
  const reslt = [];
  for (let k = 0; k < array.length; k++) {
    reslt.push(array[k] + 1)
  }
  return reslt;

}
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

console.log('11-I solutionis')

function addNum(arrray, num) {
  const resltt = [];
  for (let v = 0; v < arrray.length; v++) {
    resltt.push(arrray[v] + num);
  }
  return resltt;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

console.log('11-J solutionis')
function addArray(array1, array2) {
  const valuerslt = [];
  for (let l = 0; l < array1.length; l++) {
    valuerslt.push(array1[l] + array2[l]);
  }
  return valuerslt;
}
console.log(addArray([1, 2, 3], [1, 1, 1]));
console.log(addArray([10, 4, 2], [5, 4, 9]));

console.log('11-K solutionis')
function countPositive(numarray) {
  let rsltt = 0;
  for (let m = 0; m < numarray.length; m++) {
    if (numarray[m] > 0) {
      rsltt++;
    }
  }
  return rsltt;
}
console.log(countPositive([-1, 5, -4, 5, -9]));
console.log(countPositive([1, 5, -4, 5, -9]));

console.log('11-L and 11-M solutionis')
function minMax(numberss) {
  const reesult = {
    min: null,
    max: null
  };

  for (let q = 0; q < numberss.length; q++) {
    const vvalue = numberss[q];
    if (reesult.min === null || vvalue < reesult.min) {
      reesult.min = vvalue;
    }
    if (reesult.max === null || vvalue > reesult.max) {
      reesult.max = vvalue;
    }
  }
  return reesult;
}
console.log(minMax([-5]));

console.log('11-N solutionis')
function countWords(words) {
  const count = {};
  for (t = 0; t < words.length; t++) {
    const word = words[t];
    if (!count[word]) {
      count[word] = 1;
    }
    else {
      count[word]++;
    }
  }
  return count;
}
console.log(countWords(['apple','apple','grape','banana','banana']));


//  11-Q solution vvvvvvvvvvvvvvv---vvvvvvvvvvvv----
// part(II)
console.log(11-O,P);
let words = ['hello', 'world', 'search', 'good'];
let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
  }
}

console.log(index);

// this is second 

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
      break;
  }
}

console.log(index);

words = ['mine', 'me', 'myslef', 'l']
index = -1;

for(let i=0;i<words.length;i++){
  if(words[i]==='l'){
    index =i;
      break; //11-P
  }
}
console.log(index);

//  11-Q solution vvvvvvvvvvvvvvv---vvvvvvvvvvvv----
console.log('11-Q solution');
function findIndex(array, word) {

  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  console.log(index);
}

(findIndex(['green', 'red', 'blue', 'red'], 'red'));
(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));



// 11-R solution vvvvvvvvvvvvvvvvvvv-vvvvvvvvvvvvvvvvvv-------------vvvvvvvvvvvv
console.log('11-R solution');
function removeEgg(foods) {
  const result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {

      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'banana']));

// 11-S solution vvvvvvvvvvvvvvvvvvv-vvvvvvvvvvvvvvvvvv-------------vvvvvvvvvvvv
console.log('11-S solution');
function removeEgg(foods) {
  const result = [];
  let eggsRovome =0;
  for (let i = 0; i < foods.length; i++)
  {
    if(foods[i]==='egg' && eggsRovome<2){
      eggsRovome++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'banana']));


// 11-T solution vvvvvvvvvvvvvvvvvvv-vvvvvvvvvvvvvvvvvv-------------vvvvvvvvvvvv
console.log('11-T solution');
function removeEgg(foods) {
  const reversedFoods = foods.reverse();
  const result = [];
  let eggsRovome = 0;
  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRovome < 2) {
      eggsRovome++;
      continue;
    }
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'banana']));


// 11-U solution vvvvvvvvvvvvvvvvvvv-vvvvvvvvvvvvvvvvvv-------------vvvvvvvvvvvv
console.log('11-U solution');
function removeEgg(foods) {
  const copyRevomeEgg = foods.slice();
  const reversedFoods = copyRevomeEgg.reverse();
  const result = [];
  let eggsRovome = 0;
  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRovome < 2) {
      eggsRovome++;
      continue;
    }
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'banana'];
console.log(removeEgg(foods));
console.log(foods);
