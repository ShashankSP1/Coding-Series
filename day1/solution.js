function sumAll(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces or commas: ", (input) => {
    const values = input.trim().split(/[\s,]+/);
    const numbers = values.map(Number);

    if (!input.trim() || numbers.some((number) => !Number.isFinite(number))) {
        console.error("Please enter one or more valid numbers.");
        process.exitCode = 1;
    } else {
        console.log(sumAll(numbers));
    }

    rl.close();
});