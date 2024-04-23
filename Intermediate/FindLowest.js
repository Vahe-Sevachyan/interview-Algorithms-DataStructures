// Define a function named Second_Greatest_Lowest that finds the second smallest and second largest numbers in an array
function secondGreatestLowest(arrNum) {
  // Sort the array in ascending order using a custom comparison function
  arrNum.sort(function (x, y) {
    return x - y;
  });

  // Initialize an array uniqA with the first element of the sorted array
  let uniqA = [arrNum[0]];

  // Initialize an array result to store the second smallest and second largest numbers
  let result = [];

  // Iterate through the sorted array to remove duplicate elements
  for (let j = 1; j < arrNum.length; j++) {
    if (arrNum[j - 1] !== arrNum[j]) {
      uniqA.push(arrNum[j]);
    }
  }

  // Push the second smallest and second largest numbers to the result array
  result.push(uniqA[1], uniqA[uniqA.length - 2]);

  // Join the result array into a string and return
  return result.join(",");
}

// Log the result of calling Second_Greatest_Lowest with the input array [1,2,3,4,5] to the console
console.log(secondGreatestLowest([1, 2, 3, 4, 5]));
