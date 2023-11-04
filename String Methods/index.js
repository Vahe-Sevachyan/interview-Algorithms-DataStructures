// 1.create a function to find the number of words in a string.
// The function should take a string as an argument.
// The function should return the number of words in the string.
// 2. create a function to check if a string is longer than a certain number of characters
// The function should take two arguments: the first argument is the string, and the second argument is the number of characters.
// The function should return true if the string is longer than the number of characters, and false if it is not.

function stringLength(str, num) {
  if (str.length > num) {
    return true;
  }
  return false;
}
stringLength("newWord", 9);

function findWords(str) {
  const newStr = str.split(" ");
  console.log(newStr);
}

findWords("new words old");

// Whitespace Challenge
//option 1

function checkWhiteSpace() {
  const trimmedStr = str.trim();
  if (trimmedStr.length !== str.length) {
    return true;
  }
  false;
}
checkWhiteSpace(" i have white space");

checkWhiteSpace("    whitespace    ");

console.log(checkWhiteSpace("i have white space"));

// option 2

function hasWhiteSpace() {
  return str.indexOf(" ") !== -1;
}
console.log(hasWhiteSpace("  i-have_whiteSpace    "));
