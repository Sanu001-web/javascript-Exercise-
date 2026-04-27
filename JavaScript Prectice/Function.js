function run(a,b){
  let sum =a+b;
  let average=sum/2;
  let averagePlusOne=average+1;
  console.log("AveragePlusOne:",averagePlusOne)
  return averagePlusOne
}
run(4,8);
run(78,8);
run(7,8);
run(7,7);

// new way to write a function code
const rty =()=>
{
  let age=23;
  console.log("Hello ",age)
}
rty();
