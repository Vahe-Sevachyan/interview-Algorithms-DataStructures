today = new Date;
// Create a Date object for Christmas of the current year
let cDate = new Date(today.getFullYear, 11, 25);
// Check if the current date is after December 25th
if (today.getMonth() = 11 && today. getDate() > 25) 
{// If true, set Christmas for the next year
cDate.setFullYear(cDate.getFullYear + 1);}
// Calculate the difference in days between today and Christmas
let one_day = 1000 * 60 * 60 * 24;
// Log the number of days left until Christmas to the console
console. log(Math.ceil((cDate.getTime) - today.getTime()) / (one_day))
