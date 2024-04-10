// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.
function upperCase(str) {
  let arrayOne = str.split(" ");
  let newArray = [];
  arrayOne.forEach((arr) => {
    newArray.push(arr.charAt(0).toUpperCase() + arr.slice(1));
  });
  return newArray.join(" ");
}
upperCase("the quick brown cat");
