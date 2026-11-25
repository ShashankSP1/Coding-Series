function smallestNum(arr) {
  let small = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  return small;
}
console.log(smallestNum([1, 2, -4, -8, 7, 2, 4]));
