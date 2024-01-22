1; // A function that lets you know if a number is Even or Odd
function oddOrEven(int) {
  let output = int % 2;
  if (output == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddOrEven(7));
// result "Odd"

2; //Function that will return your string in Alphabetical order

function AlphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(AlphabeticalOrder("hello"));
// result "ehllo"

3; // Function that removes all odd number(s) in an array and returns a new array that contains even numbers only
function evenOnly(arr) {
  let result = arr.filter((arr) => arr % 2 === 0);
  return result;
}

console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// result [ 2, 4, 6 ]

4; //function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array
function numbersOnly(arr) {
  return arr.filter((arr) => typeof arr === "number");
}

console.log(numbersOnly(["text", 3, 7, "github", 13, "dev"]));
// result [ 3, 7, 13 ]

5; //Return how many words was given

function countWords(str) {
  return str.split(" ").length;
}

countWords("hello from kbpsystem!");
//result 3

6; // function that counts the number of words in a sentence.

function countWords(sentence) {
  const words = sentence.split(" ");
  return words.length;
}
console.log(countWords(["Sentence", "Hello", "Bye"]));
