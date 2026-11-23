// Exercise 2: Arrow functions don't get their own `this`
// The traditional method's `this` is the calculator object.
// The arrow function's `this` comes from the outer scope (not the object),
// so this.currentValue is undefined and undefined + 1 = NaN.

const calculator = {
  currentValue: 0,
  incrementTraditional: function () {
    this.currentValue += 1;
    return this.currentValue;
  },
  incrementArrow: () => {
    this.currentValue += 1;
    return this.currentValue;
  },
};

// Testing
console.log(calculator.incrementTraditional()); // 1
console.log(calculator.incrementArrow()); // NaN
console.log(calculator.currentValue); // 1 (the arrow never touched it)
