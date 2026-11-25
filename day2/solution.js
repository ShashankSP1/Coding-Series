function largestNumber(arr){
    let largeNum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(largeNum< arr[i]){
            largeNum = arr[i];
        }
    }
    return largeNum;
}

console.log(largestNumber([1, 2, -4, 5, 8, -2]));