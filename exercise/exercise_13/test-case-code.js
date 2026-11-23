// Exercise 13: `this` in regular functions vs arrow functions
// The regular method gets `this` = the person object.
// The arrow function inherits `this` from the outer scope,
// so this.name is undefined.

const person = {
  name: "Alice",
  regularFunction: function () {
    return `My name is ${this.name}`;
  },
  arrowFunction: () => {
    return `My name is ${this.name}`;
  },
};

// Testing
console.log(person.regularFunction()); // 'My name is Alice'
console.log(person.arrowFunction()); // 'My name is undefined'
