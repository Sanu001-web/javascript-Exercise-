
//12-A Solution:
const add = function () {
  console.log(2 + 3);
}
add();
add();

console.log('12-B Solution:');
//12-B Solution:
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () { console.log('12b'); });
runTwice(add);


console.log('12-C Solution on screen');

document.querySelector('.js-saved-btn')
  .addEventListener('click', () => {
    const button = document.querySelector('.js-saved-btn');

    //setTimeout(()=>{...same code *12P*...})
    setTimeout(() => {
      button.innerHTML = 'Finished!'
    }, 1000);
  });


console.log('12-D Solution on screen');


document.querySelector('.js-saved-btn-two')
.addEventListener('click', () => {
  const button = document.querySelector('.js-saved-btn-two');
  button.innerHTML = 'Loading...'

  //setTimeout(()=>{...same code *12P*...})
  setTimeout(function () {
    button.innerHTML = 'Finished!'
  }, 1000);
});


console.log('12-E Solution on screen');

document.querySelector('.randderMsg')
.addEventListener('click', () => {
  const randderMsg = document.querySelector('.randderMsg')

  //setTimeout(()=>{...same code *12P*...})
  setTimeout(function () {
    randderMsg.innerHTML = 'Added on cart';
  }, 1000)
});


console.log('12-F Solution on screen');
let timeOutid;
function randderMsg() {
  const randderMsg = document.querySelector('.randderMsg')
  randderMsg.innerHTML = `<div class="tick-container"><img src="https://img.icons8.com/?size=48&id=63262&format=png" class="tick"> Added on cart </div>`;
  clearTimeout(timeOutid);

  // setTimeout(()=>{...same code *12P*...})
  timeOutid = setTimeout(function () {
    randderMsg.innerHTML = '';
  }, 1500)
}

console.log('12-H-Solution:')

let messages = 4;

// setInterval(()=>{...same code *12P*...})
setInterval(function () {
  if (document.title === 'App') {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'App';
  }
}, 1000);

console.log('12-J-Solution:');
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(8, 3));
console.log(multiply(7, 11));
//this code for displayin screen !
// document.querySelector('.twelve-J').innerHTML=(multiply(2,3));
// document.querySelector('.twelve-J').innerHTML=(multiply(7,10));

console.log('12-K-Solution:');
const multiplyTwo = (a, b) => a * b;
console.log(multiplyTwo(2, 3));
console.log(multiplyTwo(7, 10));

console.log('12-L-Solution:');
function countPositiv(nums) {
  let positiveNumbers = 0;
  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });
  return positiveNumbers;
}
console.log(countPositiv([1, -3, 5]));
console.log(countPositiv([-2, 1, -3, 7, 10]));
console.log(countPositiv([12, -45, -7, 5, 6, 66]));

console.log('12-M-Solution:');
function addNum(array, num) {
  return array.map(value => value + num);
}
console.log(addNum([1, 2, 3], 2));

console.log('12-N-Solution:');
function removeEgg(foods) {
  const reverseRomoveEgg = removeEgg.foods;
  return foods.filter((food) => food !== 'egg');
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'hamburger']));


console.log('12-O-Solution:');
function removeEgg(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }
    return true;
  });
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'hamburger']));

console.log('12-P,Q-Solution is 12c-12i refector')









