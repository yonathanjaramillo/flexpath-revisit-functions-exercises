// Exercise 15: String module with an IIFE (module pattern)
// The string `str` is private; only the returned methods touch it.

const stringModule = (function () {
  let str = "";

  return {
    setString: function (value) {
      str = value;
    },
    toUpperCase: function () {
      return str.toUpperCase();
    },
    toLowerCase: function () {
      return str.toLowerCase();
    },
    capitalize: function () {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  };
})();

// Testing
stringModule.setString("hello world");
console.log(stringModule.toUpperCase()); // 'HELLO WORLD'
console.log(stringModule.capitalize()); // 'Hello world'

console.log(typeof str); // 'undefined' - str is private
