function checkWhiteSpace(str: string) {
  const trimmedStr = str.trim();
  if (trimmedStr.length === str.length) {
    return true;
  } else {
    false;
  }
}

checkWhiteSpace("    whitespace    ");

//||

console.log(checkWhiteSpace("i have white space"));
