// Exercise 3: Creating a function dynamically with the Function constructor

const dynamicFactorial = new Function(
  "n",
  `
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
`
);

// Testing
console.log(dynamicFactorial(5)); // 120
