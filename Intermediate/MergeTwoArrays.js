// Function to merge two arrays, removing duplicates and maintaining the order
function merge_array(array1, array2) {
  // Initialize an empty array to store the result
  let result_array = [];

  // Concatenate both arrays to form a new array
  let arr = array1.concat(array2);

  // Get the length of the new array
  let len = arr.length;

  // Initialize an empty object to keep track of unique items
  let assoc = {};

  // Iterate through the array in reverse order
  while (len--) {
    // Get the current item from the array
    let item = arr[len];

    // Check if the item is not already in the result array
    if (!assoc[item]) {
      // Add the item to the beginning of the result array
      result_array.unshift(item);

      // Mark the item as seen in the associative object
      assoc[item] = true;
    }
  }

  // Return the result array with unique items
  return result_array;
}

// Example arrays for testing
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

// Output the result of merging the arrays
console.log(merge_array(array1, array2));
