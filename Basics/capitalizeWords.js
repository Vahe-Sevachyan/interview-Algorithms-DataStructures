function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Test
console.log(capitalizeWords("this is a sample sentence")); // Output: 'This Is A Sample Sentence'
