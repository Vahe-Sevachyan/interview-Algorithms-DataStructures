function titleCase(str) {
  const splitStr = str.split(" ");
  let newStr = [];
  splitStr.forEach((str) => {
    let splitStr = str.charAt(0).toUpperCase() + str.slice(1);
    newStr.push(splitStr);
  });
  return splitStr.join(" ");
}
console.log(titleCase("the quick brown fox jumped over the lazy dog"));
