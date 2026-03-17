const person = {
  name : "shubham",
  age : 25,
  address :"Indore",
  phone : 123456789
}
// adding a new key & value

person['email'] = "sanukayda@gmail.com"


// exces key and there value
console.log(person.name)
console.log(person ['age'])
console.log(person.address)
// exces the object
console.log(person)
// age checher prectice
let age = 11;
if (age >=10 && age<=20) {
  console.log("Age between 10 and 20")
}
else{
  console.log("The Age is not between 10 and 20")
}

// ternary operator prectice exe
let age = prompt("Hey enter your age:")
console.log(age<18? 'cant drive':'drive')

// Find age between 10 and 20
let age = prompt("Enter your Age");
if (age>10 && age<20)
{
  console.log(age,"is between 10 and 20")
}
else{
  console.log("your age is not between 10 and 20")
}

// switch case update

let age = prompt("Enter your Age");
switch(age){
  case '5':
  console.log("your age is 5")
  break
  case '11':
  console.log("your age is 5")
  break
  case '51':
  console.log("your age is 5")
  break
  case '45':
  console.log("your age is 5")
  break
  case '13':
  console.log("your age is 5")
  break
  default:
  console.log("Invailide Age you entered")

}
