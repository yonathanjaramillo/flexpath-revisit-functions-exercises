// Exercise 12: Closures - each call to createCounter makes a new
// private `count`, and the returned function keeps access to it.
// The two counters are fully independent.

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

// Testing
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1 (its own count)
console.log(counter1()); // 3
