// Get the current date
let today = new Date();

// Get the day of the month
let dd = today.getDate();

// Get the month (adding 1 because months are zero-based)
let mm = today.getMonth() + 1;

// Get the year
let yyyy = today.getFullYear();

// Add leading zero if the day is less than 10
if (dd < 10) {
  dd = "0" + dd;
}

// Add leading zero if the month is less than 10
if (mm < 10) {
  mm = "0" + mm;
}

// Format the date as mm-dd-yyyy and log it
today = mm + "-" + dd + "-" + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + "-" + mm + "-" + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + "/" + mm + "/" + yyyy;
console.log(today);
