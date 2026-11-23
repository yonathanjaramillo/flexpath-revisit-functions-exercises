// Exercise 16: Constructor function + prototype method
// `introduce` lives on the prototype, so all instances share
// one copy of the method instead of each getting their own.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
};

// Testing
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.introduce()); // "Hello, I'm Alice and I'm 30 years old."
console.log(person2.introduce()); // "Hello, I'm Bob and I'm 25 years old."

console.log(person1.introduce === person2.introduce); // true (shared method)
