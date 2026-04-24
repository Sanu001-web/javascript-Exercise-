
 // Print the ODD & Even numbers from 7 to 31 
let i=7
for(i;i<=31;i++)
{
if(i%2==0) //if(i%2!=2) this for 'odd nummber'
{
  console.log("Numbers:",i)
}
}

// Print the EVEN numbers from 10 to -20
for (var i = 10; i >= -20; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

 // Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

for(let i=1;i<=45;i++)
{
  if(i%3==0 && i%5==0)
  {
    console.log("fizzBuzz")
  }
  else if(i%3==0)
  {
    console.log("fizz")
  }
  else if(i%5==0)
  {
    console.log("Buzz")
  }
}

// Sum of First N Natural Numbers Using While Loop in JavaScript
let n=parseInt(prompt("Enter the value of n:"))
let i=1
let sum=0;
if(n>0)
{

while(i<=n)
{
  sum+=i;
  i++;
}
console.log("sum of natural number:",+sum)
}
else{
  console.log("Please enter the valid number!")
}


// Find factorial of given number
let num=parseInt(prompt("Enter the Number:"))
let fac=1;


if(num>=0)
{
  while(num>1)
  {
    fac*=num;
    num--;
  }
  console.log("Factorial:" ,fac)
}
else
{
  console.log("Enter the valid number!")
}




// https://medium.com/@francesco-saviano/10-exercises-with-while-loops-in-javascript-8cfb2bd81a71
