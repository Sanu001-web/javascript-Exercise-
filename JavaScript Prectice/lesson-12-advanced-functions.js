
// 12-A Solution:
const add = function () {
  console.log(2 + 3);
}
add();
add();

console.log('12-B Solution:');
// 12-B Solution:
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () { console.log('12b'); });
runTwice(add);


console.log('12-C Solution on screen');
function updateBtn() {
  const button = document.querySelector('.js-saved-btn');

  setTimeout(function () {
    button.innerHTML = 'Finished!'
  }, 1000);
}


 console.log('12-D Solution on screen');
function updateBtnTwo() {
  const button = document.querySelector('.js-saved-btn-two');
  button.innerHTML = 'Loading...'

  setTimeout(function () {
    button.innerHTML = 'Finished!'
  }, 1000);
}
 console.log('12-E Solution on screen');
 function randderMsg(){
  const randderMsg = document.querySelector('.randderMsg')
  setTimeout(function(){
    randderMsg.innerHTML = 'Added on cart';
  },1000)
 }
 
console.log('12-F Solution on screen');
let timeOutid;
function randderMsg() {
  const randderMsg = document.querySelector('.randderMsg')
  randderMsg.innerHTML = `<div class="tick-container"><img src="https://img.icons8.com/?size=48&id=63262&format=png" class="tick"> Added on cart </div>`;
  clearTimeout(timeOutid);
  timeOutid = setTimeout(function () {
    randderMsg.innerHTML = '';
  }, 1500)
}

console.log('12-H-Solution:')

let messages = 4;
setInterval(function () {
  if (document.title === 'App') {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'App';
  }
}, 1000);







