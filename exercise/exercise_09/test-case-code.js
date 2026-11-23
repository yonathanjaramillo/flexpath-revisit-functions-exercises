// Exercise 9: Rest parameters - the modern version of Exercise 8
// `...nums` collects all arguments into a real array.

function multiplyAll(...nums) {
  return nums.reduce((product, num) => product * num, 1);
}

// Testing
console.log(multiplyAll(1, 2, 3, 4)); // 24
console.log(multiplyAll(5, 5)); // 25
console.log(multiplyAll(7)); // 7
