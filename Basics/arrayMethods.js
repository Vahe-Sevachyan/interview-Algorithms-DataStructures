//map method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => {
  return num * 2;
});
//filter method
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 2;
});
//reduce method
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

// forEach method

numbers.forEach((num) => {
  console.log(num * 2);
});

// find method
const foundNumber = numbers.find((num) => {
  return num > 2;
});

//some method

const hasEvenNumber = numbers.some((num) => {
  return num > 5;
});

//every

const allNumsGreaterThanZero = numbers.some((num) => {
  return num > 0;
});
