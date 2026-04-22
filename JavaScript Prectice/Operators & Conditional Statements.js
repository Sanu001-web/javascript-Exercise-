// Write a program that determines whether a given number is positive or negative.
let num=prompt("Enter the number:")
num=Number.parseInt(num)

num >0?console.log(num,"is positive"):console.log(num,"is negative")


// Write a program that checks if a number is even or odd.

let num=prompt("Enter the Number:")
num=Number.parseInt(num);
if(num%2==0)
{
  console.log(num,"is even number.")
}
else{
  console.log(num,"Is odd number")
}

// Write a program to determine the greater of two numbers.

let a=prompt("Enter the first number:")
a=Number.parseInt(a)
let b=prompt("Enter the second number:")
b=Number.parseInt(b)

if(a>b){
  console.log(a +" is grater than",+b)
}
else if(a>=b){
  console.log(a +" Equals to",+b)
}
else{
  console.log(a +" is not grater & than equals to",+b)
}
