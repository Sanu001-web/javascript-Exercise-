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
