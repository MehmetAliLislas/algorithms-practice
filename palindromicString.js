function isPalindromic(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  if (str == reversed) {
    return console.log("It's palindromic");
  } else return console.log("It's not palindromic.");
}

isPalindromic("xox");
isPalindromic("test");
