// Exercise 7: Default parameters
// The default only kicks in when the argument is missing or undefined.
// Passing null does NOT trigger the default.

function createUser(name, role = "guest") {
  return { name, role };
}

// Testing
console.log(createUser("Alice")); // { name: 'Alice', role: 'guest' }
console.log(createUser("Bob", "admin")); // { name: 'Bob', role: 'admin' }
console.log(createUser("Charlie", undefined)); // { name: 'Charlie', role: 'guest' }
console.log(createUser("Dave", null)); // { name: 'Dave', role: null }
