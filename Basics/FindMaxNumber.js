//solution #1 using the forEach method
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

//solution #2 using the filter method
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

//solution #3 using the reduce method
