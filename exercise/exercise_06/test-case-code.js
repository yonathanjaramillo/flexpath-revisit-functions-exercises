// Exercise 6: Pass by value (primitives) vs pass by reference (objects)
// Reassigning the number inside the function only changes the local copy.
// Mutating the object changes the caller's object, because both point
// to the same object in memory.

function modifyValues(num, obj) {
  num = num * 10;
  obj.value = obj.value * 10;
}

// Testing
let myNum = 5;
let myObj = { value: 5 };

modifyValues(myNum, myObj);

console.log(myNum); // 5 (unchanged)
console.log(myObj.value); // 50 (changed)
