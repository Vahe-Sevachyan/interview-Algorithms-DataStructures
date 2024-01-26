function countdownTimer(seconds) {
  let timeLeft = seconds;
  const timer = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(timer);
      console.log("Time is up!");
    } else {
      console.log(`Time remaining: ${timeLeft} seconds`);
      timeLeft--;
    }
  }, 1000);
}
