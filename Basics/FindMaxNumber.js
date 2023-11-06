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

function maxNumber(maximumNum) {
  let maxNum = 0;
  maximumNum.filter((num) => {
    if (num > maxNum) {
      maxNum = num;
    }
  });
  return maxNum;
}

console.log(maxNumber([1, 2, 4, 5, 6, 20]));
