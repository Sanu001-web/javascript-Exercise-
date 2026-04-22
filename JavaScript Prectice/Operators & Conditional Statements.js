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

// Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

let grade = prompt("Enter the obtained grade:");
grade = Number.parseFloat(grade);

if (grade >= 0 && grade <= 10) {

  if (grade >= 9 && grade <= 10) {
    console.log("Obtained grade:", grade, "O - Outstanding");
  }
  else if (grade >= 8 && grade < 9) {
    console.log("Obtained grade:", grade, "A+ - Excellent");
  }
  else if (grade >= 7 && grade < 8) {
    console.log("Obtained grade:", grade, "A - Very Good");
  }
  else if (grade >= 6 && grade < 7) {
    console.log("Obtained grade:", grade, "B - Good");
  }
  else if (grade >= 5 && grade < 6) {
    console.log("Obtained grade:", grade, "C - Satisfactory");
  }
  else if (grade >= 4 && grade < 5) {
    console.log("Obtained grade:", grade, "D - Pass");
  }
  else {
    console.log("Obtained grade:", grade, "F - Fail");
  }

} 
else {
  console.log("Please enter a valid grade (0–10)");
}

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age =prompt("Enter your age:")
age= Number.parseInt(age)


if(age < 0)
{
 console.log("Please enter the valid age:")
}
else if(age<=12)
{
  console.log("The ticket price for" ,age,"is: 5")
}
else if(age<18)
{
  console.log("The ticket price for" ,age,"is: 10")
}
else if(age<60)
{
  console.log("The ticket price for" ,age,"is: 20")

}
else 
{
  console.log("The ticket price for" ,age,"is: 15")

}

// Write a program that determines if a year is a leap year.

// let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

let year =prompt("Enter the age:")
year=Number.parseInt(year)

if(year<0)
{
  console.log("Please enter the valid year!")
}
else if(year%400==0)
{
  console.log(year," is a leap year!")
}
else if(year%100==0)
{
console.log(year," is not a leap year!")
}
else if(year%4==0){
  console.log(year," is a leap year!")
}
else {
  console.log(year, "is NOT a leap year!");
}

// Write a program that calculates a discount based on the purchase amount.

let price =prompt("Enter the total ammount:")
price =Number.parseFloat(price)

console.log("Your Total Ammount is:",price)

if(price>=100)
{
  console.log("Congratulation you got ₹20 off")
}
else if(price>=50)
{
  console.log("Congratulation you got ₹10 off")
}
else{
  console.log("please purchase more iteams!")
}

