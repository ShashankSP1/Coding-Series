function countEvenOdd(arr){
    let even=0;
    let odd=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            even++;
        }
        else{
            odd++;
        }
    }
    return [even, odd];
}
const [even, odd] = countEvenOdd([10, 15, 20, 25, 30, 35, 40]); 
console.log("Even", even);
console.log("Odd", odd);