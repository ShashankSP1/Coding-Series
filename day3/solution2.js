function minMaxVal(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(min>arr[i]) min=arr[i];
        if(max<arr[i]) max=arr[i];   
    }
    return [min, max];
}
var [min, max] =minMaxVal([1, 2, -4, 5, 6, 8, 3, 5]);
console.log("Smallest", min);
console.log("Largest", max);