
 // Print the ODD & Even numbers from 7 to 31 
let i=7
for(i;i<=31;i++)
{
if(i%2==0) //if(i%2!=2) this for 'odd nummber'
{
  console.log("Numbers:",i)
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
