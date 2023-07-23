//option 1

function checkWhiteSpace(str: string) {
  const trimmedStr = str.trim();
  if (trimmedStr.length !== str.length) {
    return true;
  }
  false;
}

checkWhiteSpace(" i have white space");

// ||

console.log(checkWhiteSpace("i have white space"));

// option 2

function hasWhiteSpace(str: string) {
  return str.indexOf(" ") !== -1;
}
console.log(hasWhiteSpace("  i-have_whiteSpace    "));
