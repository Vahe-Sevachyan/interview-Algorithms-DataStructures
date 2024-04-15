function firstHalf(str) {
  // Check if the length of the string is even
  if (str.length % 2 == 0) {
    // Use the slice method to get the first half of the string
    return str.slice(0, str.length / 2);
  }
  // If the length is odd, return the original string
  return str;
}
console.log(firstHalf("JavaScript"));
