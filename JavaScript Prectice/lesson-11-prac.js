// 11d,e,f

for(let i=0; i<10;i+=2){
console.log(i);
}

for(let i=5; i>=0;i--){
console.log(i);
}

}
let i=0;
while(i<=10){
console.log(i);
    i+=2;
}

let i = 5;
while(i>=0){
    console.log(i);
    i--;

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
    for (let i = 0; i < array.length; i++) {
    reslt.push(array[i]+1)
}
return reslt;
    
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));
