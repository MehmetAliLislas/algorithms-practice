let text = "Hello!";
let reversedText = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversedText = reversedText + text[i];
}

return console.log(reversedText);
