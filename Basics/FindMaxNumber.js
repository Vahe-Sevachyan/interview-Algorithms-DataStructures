function findMaxNumber(maxNumber) {
  let maxNum = 0;
  maxNumber.forEach((num) => {
    if (num > maxNum) {
      maxNum = num;
    }
  });
  return maxNum;
}
console.log(findMaxNumber([1, 2, 4, 5, 6, 20, 34]));
