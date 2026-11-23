// Exercise 17: Arrow functions have NO `arguments` object
// Regular functions get an `arguments` object automatically.
// Arrow functions don't - inside an arrow, `arguments` refers to
// whatever `arguments` exists in the outer scope, and in a browser
// or ES module (where there is none) it throws a ReferenceError.
// Use rest parameters (...args) in arrow functions instead.
// Note: run under plain Node/CommonJS, the arrow below may instead
// print the module wrapper's own arguments object - that is Node's
// wrapper leaking in, and it proves the same point: the arrow has
// no arguments of its own.

function regularFunction() {
  console.log("Regular Function Arguments:", arguments);
}

const arrowFunction = () => {
  try {
    console.log("Arrow Function Arguments:", arguments);
  } catch (e) {
    console.error("Arrow Function Error:", e.message);
  }
};

// Testing
regularFunction(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
arrowFunction(4, 5, 6); // ReferenceError in browser/ES modules
