function countVowels(str) {
  const strArray = str.split("");
  let sum = 0;
  strArray.forEach((str) => {
    if (
      str === "a" ||
      str === "e" ||
      str === "i" ||
      str === "o" ||
      str === "u"
    ) {
      sum++;
    }
  });
  return sum;
}
countVowels("hello");
