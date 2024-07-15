// functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

// Bruteforce solve
// if you want to do with parameter x
x = 4;
const fn1 = (x) => x + 1;
const fn2 = (x) => x * x;
const fn3 = (x) => 2 * x;
console.log(fn1(fn2(fn3(x)))); // output is 65

// or without parameter x, just give a number to function
console.log(fn1(fn2(fn3(7)))); // output is 197
