// Exercise 1: Function declarations are hoisted; function expressions are not
// The declaration can be called before its definition.
// The expression (a const) is in the temporal dead zone before its line,
// so calling it early throws an error, caught below.

// Calling function declaration before it's defined
console.log(declaredFunction()); // "I am a declared function."

// Calling function expression before it's defined
try {
  console.log(expressFunction()); // Throws an error
} catch (e) {
  console.error(e); // ReferenceError: Cannot access 'expressFunction'
  // before initialization (older engines reported a TypeError instead)
}

// Function declaration
function declaredFunction() {
  return "I am a declared function.";
}

// Function expression
const expressFunction = function () {
  return "I am a function expression.";
};
