// Exercise 11: The classic closure-in-a-loop problem, and two fixes
// With `var`, all five callbacks share ONE variable. By the time the
// timers fire, the loop is finished and i is 6 - so 6 prints five times.
// Fixes: capture the value per iteration with an IIFE, or use `let`
// (which creates a fresh binding for every iteration).
// (Delays shortened and staggered so each group prints together.)

// Incorrect version (closure issue) - prints 6 five times
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Number:", i);
  }, i * 100);
}

// Corrected version using IIFE - prints 1 to 5
for (var j = 1; j <= 5; j++) {
  (function (num) {
    setTimeout(function () {
      console.log("Number:", num);
    }, 600 + num * 100);
  })(j);
}

// Alternative, using let - prints 1 to 5
for (let k = 1; k <= 5; k++) {
  setTimeout(function () {
    console.log("Number:", k);
  }, 1200 + k * 100);
}
