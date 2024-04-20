// Function to remove duplicate elements from an array
function removeDuplicates(num) {
  // Initialize variables: x for iteration, len for array length, out for the result array, obj for object to track unique elements
  let x,
    len = num.length,
    out = [],
    obj = {};

  // Iterate through the input array and add each element to the object with a value of 0
  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
  }

  // Iterate through the object and push each unique element to the result array
  for (x in obj) {
    out.push(x);
  }

  // Return the array containing unique elements
  return out;
}

// Initialize an array with duplicate elements
let myNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
