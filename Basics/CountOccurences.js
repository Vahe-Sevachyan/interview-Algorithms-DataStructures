function countOccurrences(string, value) {
  numOfOccurrences = 0;
  //splits the string into an array
  splitString = string.split("");
  //loops over the array and checks if the array contains the value
  splitString.forEach((str) => {
    if (str === value) {
      numOfOccurrences++;
    }
    return numOfOccurrences;
  });
}
console.log(countOccurrences("Hello World", "l"));
