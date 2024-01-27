//write a function that finds the max number in array
function findMax(arr) {
  return Math.max(...arr);
}
//write a function that removes vowels from a given string

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

//write a function that swaps values
let a = "one";
let b = "two";
function swapValues(a, b) {
  [a, b] = [b, a];
  return { a, b };
}

//Write a function that removes spaces from a given string.

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}
removeSpaces("He llo Wo rld");
