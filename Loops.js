// program to add first natural number
let sum=0;
let n=prompt("Enter the value of n:")
n=Number.parseInt(n);
for(let i=0; i<=n; i++){
    sum +=i
}
console.log("The Sum of first " + n + " natural numer is:" +sum)
// print number that user given
let n=prompt("Enter the value of n:")
n=Number.parseInt(n);
for(let i=0; i<n; i++){
    console.log("Print the given number:" +i)
}

// this is example of for "In" loops & need a object for this loop 
let zk={
  harry:90,
  sadhika:45,
  ritika:99,
  shiv:19
}
for(let c in zk){
  console.log("Marks of " + c + " are : " +zk[c] )

}

// this is example of for "In" loops & need a arrary for this loop

for(let b of "Sadhika"){
  console.log(b)
}
// this is example of " while loop"
let n =prompt("Enter the value of n: ")
n=Number.parseInt(n);
let sum=0;
let i=0;
while(i<=n)
{
  sum  +=i;
  i++;
  console.log(i)
}
  console.log("number are :",sum)

// this is example of "do while" loop

let n =prompt("Enter the value of n: ")
n=Number.parseInt(n);
let sum=0;
let i=0;
do{
  sum  +=i;
  i++;
  console.log(i)
}
while(i<=n){
  console.log("number are :",sum)
}

// another example of do while loop
let n =prompt("Enter the value of n");
n =Number.parseInt(n)
let i=10;
do{
  console.log(i)
  i++
}
while(i<n)


// reverse number print

let n =prompt("Enter the value of n:")
n=Number.parseInt(n)
console.log("For loop")
for(let i=10;i>=1;i--)
{
  console.log("number are:"+i)
}
// Sum and average of natural number
let n =prompt("Enter the value of n:")
n=Number.parseInt(n)
let sum =0;
let avg=0;
for(let i=1; i<=n; i++)
{
  sum+=i;
  avg =sum/i
  console.log("The Number is : "+i)
}
console.log("Sum of " + n + " number is: " +sum);
console.log("Average of " +sum+ " is: "+avg)

// Cube of Numbers Up to an Integer
let n =prompt("Enter the value of n:")
n=Number.parseInt(n)
let cube =0
for(let i=1;i <= n ;i++)
{
  cube= i * i * i
}
console.log("cube of " + n + " number is: " +cube);


// do while loop new example
console.log("do while loop start from here!")

let n=prompt("Enter the Number:");
n=Number.parseInt(n);
console.log(typeof n)
do{
  console.log(n)
  n++;
}
while(n<=20)


// used of in type in 'for loop'

console.log("in loop in for loop")
let obj ={
  name:'shaan',
  age:22,
  id:32154,
  address:'Sarni'
}
// let a;
for(let a in obj)
{
  console.log("the value of" ,a, "for shaan is :" ,obj[a])
}

let n=prompt("Enter the Value of n: ")
n=Number.parseInt(n);
console.log(typeof n)
for(let i=0;i<=n;i++)
{
  if (i%2===0)
  {
    continue;
  }
  console.log("number is: " ,i)
}

// function in Js

console.log("JavaScript Fuctions")
function abd(a,b)
{
  let sum=a+b;
  let average=sum/2;
  let onePluse=average+1;
  return onePluse;
}
// let a=8
// let b=4
console.log(abd(8,4))
console.log(abd(16,20))
console.log(abd(116,201))

function act(name)
{
  console.log("Hello JavaScript" + name)
  console.log("Bonjour" +name)
}
act(" shaan");
act(' shaan');
