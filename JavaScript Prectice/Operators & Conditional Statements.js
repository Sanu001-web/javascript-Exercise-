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
