// Introduction
// You collaborate in the sports section of the high school newspaper. This season the high school
// basketball team is playing very well and is in the first position. The newspaper director has
// requested you to find out the magic number required to win the season’s title.
// In certain sports, each game results in a win or a loss, but not a tie. The magic number indicates
// how close a front-running team is to win a season title. This number represents the total of
// additional wins by the front-running team or additional losses (or any combination thereof) by the
// rival team after which it is mathematically impossible for the rival team to capture the title in the
// remaining games. The formula to calculate the magic number is:
// magic number = total number of games - number of wins by a front-running team - number of
// losses by the 2nd place team + 1
// Can you write a program to find out the magic number?

// Input
// The input consists of three lines:
// - The first line has the total number of games in a regular season.
// - The second line has the name (in a single word) of the front-running team followed by the
// numbers of wins and losses during the current season.
// - The third line has the name (in a single word) of the second placed team followed by the numbers
// of wins and losses during the current season.

// Output
// The output will be a single line reporting the magic number of matches that the front-running
// team must win to conquer the season’s title.

// Example
// Input
// 162
// Chicago 90 45
// Cleveland 88 46
// Output
// Chicago must win 27 matches

let totalGames;
let firstTeam = "FB 28 6";
let secondTeam = "GS 26 5";

console.log(firstTeam.slice(""));

// console.log(firstTeam);

// let magicNumber = totalGames - firstTeam[1] - secondTeam[2] + 1;
// console.log(magicNumber);
