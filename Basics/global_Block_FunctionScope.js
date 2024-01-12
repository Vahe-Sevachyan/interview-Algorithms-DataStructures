//num is a globally scoped variable, meaning its available anywhere in your application
const firstNum = 50;

function addValue(randomNum) {
  //newNum is function scoped, which means its only available in the 'addValue' function
  let secondNum = 40;
  if (secondNum > randomNum) {
    let multipliedNumber = secondNum * randomNum;
    console.log(multipliedNumber);
  } else if (secondNum < randomNum) {
    secondNum = randomNum;
    console.log(secondNum);
  }
  //cant access multipliedNumber here inside the addValue function
}

//cant access multipliedNumber here in the global scope

addValue(30);

//here you do not have access to the 'secondNum' variable because it is scoped inside the 'addValue' function
// however from inside the addValue function you have access to the 'num' variable on line 1 because it is on the global scope

const combinedNum = firstNum + multipliedNumber; //this will out to an error because the secondNum variable is only available inside the addValue function
console.log(combinedNum);
