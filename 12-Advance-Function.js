/*const functionOne = function green() {
  console.log('hello !');
};
console.log(functionOne);
console.log(typeof functionOne);
functionOne();

const object = {
  name: 'shaan',
  fun: function functionTwo(){
    console.log(`hello,${object.name}`);
  }
};
object.fun();



function fun1(functions) {
functions();
}
fun1( function fun2(){
console.log('hello !40')
});

const result = setTimeout(function green(){
  console.log('this is time out & coming up!');
},3000)
// document.querySelector('.timeOver').innerHTML = result;
setIntervall(function greenTwo(){
  console.log('this is interval !');
},2000);

console.log('this is next called next line')


[ 'make water',
  'play movie',
  'drink food',
  'play road'
].forEach((value, index) => {

  if(value ==='play movie'){
    return; //continu;
  }

  console.log(`${index} : ${value}`)
  // console.log(value);
});


const fruit=['apple','banana','orang','grape'];

fruit.forEach((index,value)=>{
  console.log(`${index} : ${value}`);
});

const aeroFunction= (name)=>{
  console.log('Helllo from',name);
}

aeroFunction('shaan !');


const aerroFunction= function(){
  console.log('type function!');
}
aerroFunction();

function helloFunction(){
  console.log('?')
}
helloFunction();

const nums = [1, 2, 3];

nums.forEach((value, index, array) => {
    console.log(value, index, array);
});

const object ={
  methodZero: ()=>{
    console.log('aero method!');
  },
  method(){
    console.log('shorthand method!');
  }
};

object.methodZero();
object.method();

const buttonElement = document.querySelector('.js-click-btn');

const eventListener = () => {
  console.log('clicked!');
  // document.querySelector('.radderpro').innerHTML='clicked';
  //if we want to saw result on screen:
}

buttonElement.addEventListener('click',eventListener);

// buttonElement.removeEventListener('click',eventListener);

buttonElement.addEventListener('click', () => {
  console.log('clicked-Two!');
  // document.querySelector('.radderpro').innerHTML='clicked';
  //if we want to saw result on screen:
})
*/



console.log('filter():', [4, 5, -8, -5, 58].filter((value, index) => {

  /*if(value >=0){
    return true
  }
  else{
  return false;
  }
  */
  return value >= 0;

}));

console.log('map():', [5, 2, 3].map((value, index) => {
  return value * 2;
}));

// shortcuts:
console.log('map():', [15, 21, 35].map(value => value * 2));
