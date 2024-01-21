//Combine the numbers of a given array into an array containing all combinations

const combinedNumbers = (arr) =>
  arr.reduce(
    (accumulator, currentValue) =>
      accumulator.concat(
        accumulator.map((result) => [currentValue].concat(result))
      ),
    [[]]
  );
console.log(combinedNumbers([1, 2]));
console.log(combinedNumbers([1, 2, 3]));
console.log(combinedNumbers([1, 2, 3, 4]));

// The function uses the reduce method on the input array arr. The initial value for the accumulator is an array containing an empty array [[]].

// Inside the reduce callback function, for each element v in the input array, it concatenates to the accumulator a new array.

// This new array is constructed by mapping over the existing elements in the accumulator.

// The inner map function takes each existing result r in the accumulator and constructs a new array by concatenating the current element v to it.

// This effectively creates combinations of the current element v with each existing result.

// The final result is an array containing all possible combinations of elements from the input array.

// Here's an example using the input array [1, 2, 3, 4]:

// Iteration 1: v = 1

// Accumulator: [[]]
// New array: [[1]]
// Iteration 2: v = 2

// Accumulator: [[1]]
// New array: [[2, 1], [1, 2]]
// Iteration 3: v = 3

// Accumulator: [[2, 1], [1, 2]]
// New array: [[3, 2, 1], [2, 3, 1], [2, 1, 3], [3, 1, 2], [1, 3, 2], [1, 2, 3]]
// Iteration 4: v = 4

// Accumulator: [[3, 2, 1], [2, 3, 1], [2, 1, 3], [3, 1, 2], [1, 3, 2], [1, 2, 3]]

// New array: [[4, 3, 2, 1], [3, 4, 2, 1], [3, 2, 4, 1], [3, 2, 1, 4], [4, 2, 1, 3],
// [2, 4, 1, 3], [2, 3, 4, 1], [2, 3, 1, 4], [4, 1, 3, 2], [1, 4, 3, 2], [1, 3, 4, 2], [1, 3, 2, 4],
// [4, 2, 3, 1], [2, 4, 3, 1], [2, 3, 4, 1], [2, 3, 1, 4], [4, 1, 2, 3], [1, 4, 2, 3], [1, 2, 4, 3], [1, 2, 3, 4]]

// The final result is the array containing all possible combinations of [1, 2, 3, 4].
