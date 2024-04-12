// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.
function uppercase() {
  // Split the input string into an array of words
  let array1 = str.split(" ");

  // Initialize an empty array to store the modified words
  let newArray1 = [];

  // Iterate through each word in the array
  for (let x = 0; x < array1.length; x++) {
    // Push the word with its first letter capitalized and the rest of the letters unchanged
    newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  // Join the modified words into a single string, separated by spaces
  return newArray1.join(" ");
}

// Log the result of calling uppercase with the input string "the quick brown fox" to the console
console.log(uppercase("the quick brown fox"));
