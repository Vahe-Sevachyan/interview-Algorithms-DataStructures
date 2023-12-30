function newFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 1000);
  });
}
function newFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("404");
    }, 1000);
  });
}
function onSuccess(data) {
  console.log(data);
}
function onError(errorCode) {
  console.log(`Error: ${errorCode}`);
}

newFunc1().then(newFunc2).then(onSuccess).catch(onError);
// practice practice practice
// practice practice practice
// practice practice practice
