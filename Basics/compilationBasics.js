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
