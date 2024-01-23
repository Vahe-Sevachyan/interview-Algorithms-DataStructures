//write a function that counts the number of words in a sentence
function countWords(sentence) {
  const words = sentence.split(" ");
  return words.length;
}

countWords("Javascript is awesome");
