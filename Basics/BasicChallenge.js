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

//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid number. Please input an integer.");
  }
  console.log("Number is valid:", number);
}
// Example usage:
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  console.log("Error:", error.message);
}

// Define a function named alphabet_order that takes a string parameter (str)
function alphabet_order(str) {
  // Split the string into an array of characters, sort the array, and join the characters back into a string
  return str.split("").sort().join("");
}
// Log the result of calling alphabet_order with the input string "webmaster" to the console
console.log(alphabet_order("JavaScriptMaster"));
