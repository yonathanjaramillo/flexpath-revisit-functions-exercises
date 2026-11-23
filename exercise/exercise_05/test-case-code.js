// Exercise 5: Module pattern with an IIFE
// `count` is private inside the IIFE - only the returned
// methods can reach it.

const counterModule = (function () {
  let count = 0;

  return {
    increment: function () {
      count += 1;
    },
    decrement: function () {
      count -= 1;
    },
    getValue: function () {
      return count;
    },
  };
})();

// Testing
counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue()); // 2

counterModule.decrement();
console.log(counterModule.getValue()); // 1

console.log(typeof count); // 'undefined' - count is not global
