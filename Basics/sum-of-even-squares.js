function sumOfEvenSquare(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);
  return evenSquares;
}
sumOfEvenSquare([1, 2, 3, 4, 5]);
