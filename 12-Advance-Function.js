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
*/
[ 'make water',
  'play movie',
  'drink food'
].forEach(function (value, index) {
  if(value ==='play movie'){
    return;
  }
  console.log(index)
  console.log(value);
});
