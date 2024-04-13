// Define a function named char_count that counts the occurrences of a specified letter in a given string
function charCount(str, letter) {
  // Initialize a variable letter_Count to store the count of occurrences
  let letterCount = 0;

  // Iterate through each position in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the character at the current position is equal to the specified letter
    if (str.charAt(i) == letter) {
      // If true, increment the letter_Count by 1
      letterCount += 1;
    }
  }

  // Return the final count of occurrences
  return letterCount;
}

// Log the result of calling char_count with the input string 'w3resource.com' and the letter 'o' to the console
console.log(charCount("w3resource.com", "o"));
