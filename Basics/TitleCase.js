function titleCase(str) {
  const splitStr = str.split(" ");
  let newStr = [];
  splitStr.forEach((str) => {
    splitStr = str.charAt(0).toUpperCase() + str.slice(1);
  });
  return splitStr;
}
titleCase("the quick brown fox jumped over the lazy dog");
