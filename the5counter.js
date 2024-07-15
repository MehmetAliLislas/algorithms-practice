// Introduction
// A religious sect thinks that god is number 5 and needs a program to determine in how many places
// is god, based on a number they obtain through an obscure and misterious process.
// They ask you to write a program that calculates the number of 5's that exists in all numbers from
// 0 to a given number (including it).
// For instance, given the number 20, there are two 5's in the numbers from 0 to 20: The one in 5
// and the one in 15.
// Or, another example, given the number 99, there are 20 5's in all numbers from 0 to 99 (11 in the
// 50's, remember that 55 has two fives, and 9 in the rest of tens).
// Input
// The input will be a positive integer.
// Output
// A number indicating the count of 5's in all numbers from zero to the given number.
// Example 1
// Input
// 100
// Output
// 20
// Example 2
// Input
// 283746
// Output
// 143145
// Example 3
// Input
// 5
// Output
// 1

let num = 283746;
let count = 0;

for (let i = 0; i < num; i++) {
  if (i % 5 === 0) {
    count++;
  }
}
console.log(count);
