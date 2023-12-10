const string = "Hello There";
const chars = {};

for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}

console.log(chars);
