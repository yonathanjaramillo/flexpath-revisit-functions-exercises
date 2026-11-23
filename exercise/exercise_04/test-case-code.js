// Exercise 4: IIFE (Immediately Invoked Function Expression)
// The named inner function `recurse` is invoked immediately and
// walks the nested array recursively, flattening it.

function flattenArray(arr) {
  const result = [];

  (function recurse(currentArray) {
    for (let element of currentArray) {
      if (Array.isArray(element)) {
        recurse(element);
      } else {
        result.push(element);
      }
    }
  })(arr);

  return result;
}

// Testing
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5]
