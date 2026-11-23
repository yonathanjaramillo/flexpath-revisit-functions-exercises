// Exercise 14: Setting `this` explicitly with call, apply, and bind
// call: arguments one by one. apply: arguments as an array.
// bind: returns a new function with `this` locked in.

function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const user = { name: "Bob" };

// Using call
greet.call(user, "Hello"); // 'Hello, Bob!'

// Using apply
greet.apply(user, ["Hi"]); // 'Hi, Bob!'

// Using bind
const boundGreet = greet.bind(user);
boundGreet("Welcome"); // 'Welcome, Bob!'
