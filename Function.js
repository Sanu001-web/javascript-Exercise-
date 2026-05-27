/*function run(a,b){
  let sum =a+b;
  let average=sum/2;
  let averagePlusOne=average+1;
  console.log("AveragePlusOne:",averagePlusOne)
  return averagePlusOne
}
run(4,8);
run(78,8);
run(70,8);
run(7,7);

// new way to write a function code
const rty =()=>
{
  let age=23;
  console.log("Hello and",age)
}
rty();
*/
function greet(name) {
  console.log(`Hello, ${name} !`);
}


function taxCalculator(amount, taxRate) {
  const tax = amount * taxRate;
  return tax;
}
console.log(taxCalculator(100, 0.1)); // Returns 15
console.log(taxCalculator(200, 0.1));  // Returns 40
