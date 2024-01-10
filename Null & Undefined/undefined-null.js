// in javascript 'undefined' is primitive datatype just like number, string or boolean.
// before any value is assigned to a variable in javascript, the variable type is 'undefined'
// Once a value type gets assigned then the type changes to number, string or boolean etc
let x; // undefined
let y = "Hello World!"; // number data type

// Null is the same as other programming languages, simply means nothing
// when you have a variable or object which you want to temporarily keep empty,
// then you assign 'null to a variable.
// both 'null and 'undefined' represent nothing-ness but they contain a different data type.

let z = null;
let n = undefined;
console.log(n == z); // true (the double equals only checks the value)
console.log(n === z); // false (the triple equals checks value type )

//summary

//a variable not assigned a value is 'undefined'
let b; // undefined
