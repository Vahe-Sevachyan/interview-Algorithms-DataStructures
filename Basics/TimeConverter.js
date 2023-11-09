function secondsConverter(num) {
  let oneMin = 60;
  let seconds = num * oneMin;
  return `${num} minutes are ${seconds} seconds`;
}
secondsConverter(5);
