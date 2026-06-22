const helloArray = [2,23,65,78,55,886]
console.log(helloArray);

console.log(helloArray[5])

helloArray[5] = 0;
console.log(helloArray);

const animal =['tiger','dog','elephant','monkey','cat'];
console.log(animal);

const diffArrary = [18,'tiger',false,[45,1818],{name: 'shaan'}]
console.log(diffArrary);
diffArrary.push('hello tiger')
console.log(diffArrary.length);
console.log(diffArrary);

helloArray.splice(2,0);
console.log(helloArray);



// 11d,e,f

for(let i=0; i<10;i+=2){
console.log(i);
}

for(let i=5; i>=0;i--){
console.log(i);
}


let j=0;
while(j<=10){
console.log(j);
    j+=2;
}

let z = 5;
while(z>=0){
    console.log(z);
    z--;
}
    // 11g solution
    const nums = [1,2,3]
const rslt=[];
for (let i = 0; i < nums.length; i++) {
    rslt.push(nums[i]+1)
}
console.log(rslt);

    // 11h solutionis

    function addOne(array) {
    const reslt=[];
    for (let k = 0; k < array.length; k++) {
    reslt.push(array[k]+1)
}
return reslt;
    
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));



