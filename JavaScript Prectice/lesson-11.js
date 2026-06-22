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







