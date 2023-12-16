function removeDuplicate(duplicate) {
  const uniqueArr = [];
  for (let dup of duplicate) {
    if (!uniqueArr.includes(dup)) {
      uniqueArr.push(dup);
    }
  }
  return uniqueArr;
}
removeDuplicate("hellllo reactttt");
