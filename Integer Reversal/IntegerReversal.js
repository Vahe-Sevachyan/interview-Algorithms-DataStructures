function reverseInt(num) {
  let str = num.toString().split("").reverse().join("");
  return (reversedNum = parseInt(str));
}

console.log(reverseInt(5004));
