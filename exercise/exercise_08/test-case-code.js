// Exercise 8: The `arguments` object (variable number of arguments)

function multiplyAll() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

// Testing
console.log(multiplyAll(1, 2, 3, 4)); // 24
console.log(multiplyAll(5, 5)); // 25
console.log(multiplyAll(7)); // 7
