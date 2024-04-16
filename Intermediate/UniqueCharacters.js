// Define a function named unique_char that returns a string containing unique characters from the input string
function uniqueChar(str1) {
  // Create a variable str and initialize it with the input string
  let str = str1;

  // Create an empty string uniqL to store unique characters
  let uniqL = "";

  // Iterate through each character in the input string
  for (let x = 0; x < str.length; x++) {
    // Check if the current character is not already in the uniql string
    if (uniqL.indexOf(str.charAt(x)) == -1) {
      // If true, append the current character to the uniql string
      uniqL += str[x];
    }
  }

  // Return the string containing unique characters
  return uniqL;
}

// Log the result of calling unique_char with the input string "thequickbrownfoxjumpsoverthelazydog" to the console
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));
