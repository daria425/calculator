//CREATING REFERENCES TO ELEMENTS
//Individual buttons
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnZero = document.querySelector("#zero");
const btnDecimal = document.querySelector("#decimal");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEquals = document.querySelector("#answer");
const btnClear = document.querySelector("#clear");
const btnPlusMinus = document.querySelector("#plusminus");
const btnBackspace = document.querySelector("#backspace");

const upperScreen = document.querySelector("#upper-screen-content");
const lowerScreen = document.querySelector("#lower-screen-content");

//Button groups
const allBtns = document.querySelectorAll("button");
const allNumberBtns = document.querySelectorAll(".number");
const allOperatorBtns = document.querySelectorAll(".operator");
const allFunctionBtns = document.querySelectorAll(".function");

//Event listeners for buttons
// btnOne.addEventListener("click", btnOneClicked);
// btnTwo.addEventListener("click", btnTwoClicked);
// btnThree.addEventListener("click", btnThreeClicked);
// btnFour.addEventListener("click", btnFourClicked);
// btnFive.addEventListener("click", btnFiveClicked);
// btnSix.addEventListener("click", btnSixClicked);
// btnSeven.addEventListener("click", btnSevenClicked);
// btnEight.addEventListener("click", btnEightClicked);
// btnNine.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
// btnOne.addEventListener("click", btnOneClicked);
//Draft functions

//Logic
//HAPPENS ON NUMBER BUTTONS
//User presses number button [1]
//number push to firstNumarray
//save as variable
//user presses next button [2]
//number push to firstNumArray [1,2]
//save as variable [num1=12]

//HAPPENS ON OPERATOR BUTTONS
//user presses operator [+]
//save operator value as variable
//push operator to array
//check if num1 has a value and num 2 has a value
//num1=12, num2='' so do nothing

//HAPPENS ON NUMBER BUTTONS
//User presses number button [2]
//if operator  is not empty
//number push to secondNumarray
//save as variable
//user presses next button [3]
//number push to firstNumArray [2,3]
//save as variable [num2=23]
//current saved values: num1=12 operator=+ num2=23 operatorArray=[+]

//HAPPENS ON OPERATOR BUTTONS
//user presses operator [-]
//save operator value as variable
//push operator value to array
//current saved values: num1=12 operator=- num2=23 operatorArray=[+,-]
//check if num1 has a value and num 2 has a value
//run operate function with values (num1=12, operatorArray[0], 23)
//save result to num1
//num1=23
//operator=-
//clear num2

//current saved values(num1=23, operator=-, num2='')

//HAPPENS ON NUMBER BUTTONS
////User presses number button [2]
//if operator  is not empty
//number push to secondNumarray
//save as variable
//user presses next button [1]
//number push to firstNumArray [21]
//save as variable [num2=21]

//HAPPENS ON OPERATOR BUTTONS
//user presses operator [-]
//save operator value as variable
//push operator value to array
//current saved values: num1=23 operator=- num2=21 operatorArray=[+,-,-]
//check if num1 has a value and num 2 has a value
//run operate function with values (num1=23, operatorArray[1], num2=21)
//save result to num1
//num1=2
//operator=-
//clear num2

//HAPPENS ON NUMBER BUTTON
////User presses number button [3]
//if operator  is not empty
//number push to secondNumarray
//save as variable, num2=3
//num 1=2, num2=3, operator value=-
//current saved values=num1 =2, num2=3, operatorArray=[+,-,-]

//happens on equals button
//string calculation:
//run operate function with(num1=2, num2=3, operator=getlastelement of operators array)
//save result as num1

//adding a negative number
//button +/- pressed
//if button pressed and number is positive
//add '-' in front of number
//if button pressed and number is negative
//remove '-' in front of number

//what needs to happen?
//if a number button is pressed after a result is displayed, but an operator has not been pressed
//clear all values and start new calculation
//
//12 + 2
//user pressed equals
//conditions: num1=14, num2= '', operator=+, operator array.length=1
//problem=function runs everytime a number is pressed afterwards because display value is not null and

//only display result after equals button is pressed

let firstNumArray = [];
let secondNumArray = [];
let operatorArray = [];
let resultArray = [];
let operator = "";
let num1 = "";
let num2 = "";
let num3 = "";
let equalsBtnClicked = false;
let operatorBtnClicked = false;
let result = "";
let reg = /[*+\/-]+|[A-Za-z]+/;

allNumberBtns.forEach((button) =>
  button.addEventListener("click", function () {
    checkZero();
    if (operator === "") {
      //number push to firstNumarray
      firstNumArray.push(button.value);
      console.log("the array is" + firstNumArray);
      //join array into a string and save as new variable
      num1 = firstNumArray.join("");
      console.log("the first number is" + num1);
      upperScreen.textContent = num1;
    } else if (operator !== "" && equalsBtnClicked) {
      upperScreen.textContent = button.value;
      lowerScreen.textContent = "";
      firstNumArray = [];
      firstNumArray.push(button.value);
      secondNumArray = [];
      operatorArray = [];
      operator = "";
      num1 = firstNumArray.join("");
      num2 = "";
      equalsBtnClicked = false;
    } else if (operator !== "") {
      //number push to secondNumarray
      secondNumArray.push(button.value);
      console.log("the array is" + secondNumArray);
      //join array into a string and save as new variable
      num2 = secondNumArray.join("");
      console.log("the second number is" + num2);
      if (upperScreen.textContent.at(-1).match(".")) {
        upperScreen.textContent += secondNumArray[secondNumArray.length - 1];
      } else {
        upperScreen.textContent += num2;
      }
      console.log(
        `the operator is ${operatorArray.length} characters long and the result array is ${resultArray.length} characters long`
      );
    }
  })
);

allOperatorBtns.forEach((button) =>
  button.addEventListener("click", function () {
    checkZero();
    operatorBtnClicked = true;
    if (equalsBtnClicked) {
      upperScreen.textContent = result;
      equalsBtnClicked = false;
    }
    console.log("operator button clicked!");
    //save operator value as variable
    operator = button.value;
    //push operator to array
    operatorArray.push(button.value);
    if (!upperScreen.textContent.at(-1).match(reg))
      upperScreen.textContent += button.value;
    else if (upperScreen.textContent.at(-1).match(reg)) {
      upperScreen.textContent = upperScreen.textContent.replace(
        upperScreen.textContent.slice(-1),
        button.value
      );
    }
    console.log(
      `the operator is ${operator} and  the array is ${operatorArray}`
    );
    if (num1 !== "" && num2 !== "") {
      //check if num1 has a value and num 2 has a value
      //  run operate function with values
      console.log("found equation to evaluate");
      console.log(
        `now evaluating ${num1} ${
          operatorArray[operatorArray.length - 2]
        } ${num2}`
      );
      result = operate(
        parseFloat(num1),
        operatorArray[operatorArray.length - 2],
        parseFloat(num2)
      );
      console.log(`the result is ${result}`);
      // lowerScreen.textContent = result;
      // save result to num1
      num1 = result;
      resultArray.push(result);
      //clear num2
      secondNumArray = [];
    }
  })
);

//if operatorbuttonclicked=true

btnEquals.addEventListener("click", function () {
  //only run operation once per calculation
  if (num2 !== "") {
    //get last element of operator array
    let newOperator = operatorArray.slice(-1);
    //save operation
    operatorArray.push(newOperator);
    console.log(`the operator array is now ${operatorArray}`);
    console.log(`operation currently running is ${num1}${newOperator}${num2}`);
    result = operate(parseFloat(num1), newOperator, parseFloat(num2));
    console.log(`the result is ${result}`);
    equalsBtnClicked = true;
    lowerScreen.textContent = result;
    // save result to num1
    num1 = result;
    //clear num2
    resultArray.push(result);
    secondNumArray = [];
    num2 = "";
  }
});

btnPlusMinus.addEventListener("click", function () {
  //if upper screen does not include '-'
  if (!upperScreen.textContent.includes("-")) {
    //add a - to value currently on display
    upperScreen.textContent = "-" + upperScreen.textContent;
    //num1 will only be displayed when it is not previously given a value so append to num1 if operator=''
    if (operator === "") {
      num1 = "-" + num1;
    }
    //in a string calculation or if equals is pressed append to num2
    else {
      num2 = "-" + num2;
    }
  } else {
    //remove - in front of number
    upperScreen.textContent = upperScreen.textContent.replace("-", "");
    if (operator === "") {
      num1 = num1.replace("-", "");
    } else {
      num2 = num2.replace("-", "");
    }
  }
});

btnDecimal.addEventListener("click", function () {
  //user clicks button
  //if upper screen does not contain decimal point
  if (!upperScreen.textContent.includes(".")) {
    //add decimal point after number
    upperScreen.textContent = upperScreen.textContent + ".";
    if (operator === "") {
      firstNumArray.push(".");
    } else {
      secondNumArray.push(".");
    }
  }
  //if upper screen includes decimal point do nothing
});

btnClear.addEventListener("click", function () {
  upperScreen.textContent = "";
  lowerScreen.textContent = "";
  firstNumArray = [];
  secondNumArray = [];
  operatorArray = [];
  operator = "";
  num1 = "";
  num2 = "";
});

btnBackspace.addEventListener("click", function () {
  if (operator === "") {
    firstNumArray = firstNumArray.slice(0, -1);
    num1 = num1.slice(0, -1);
    upperScreen.textContent = num1;
    console.log(`the number is ${num1} and the array is ${firstNumArray}`);
  } else {
    secondNumArray = secondNumArray.slice(0, -1);
    num2 = num2.slice(0, -1);
    upperScreen.textContent = num2;
    console.log(`the number is ${num2} and the array is ${secondNumArray}`);
  }
});

//adding keyboard support
window.addEventListener("keydown", function (e) {
  if (operator === "") {
    if (e.code.includes("Digit")) {
      console.log("event listener running now");
      firstNumArray.push(e.key);
      console.log(firstNumArray);
      num1 = firstNumArray.join("");
      upperScreen.textContent = num1;
    }
  } else {
    if (e.code.includes("Digit")) {
      console.log("event listener running now");
      secondNumArray.push(e.key);
      console.log(secondNumArray);
      num2 = firstNumArray.join("");
      upperScreen.textContent = num2;
    }
  }
});

//return to starting conditions if user tries to divide by 0
function checkZero() {
  if (lowerScreen.textContent.includes("no")) {
    upperScreen.textContent = "";
    lowerScreen.textContent = "";
    firstNumArray = [];
    secondNumArray = [];
    operatorArray = [];
    operator = "";
    num1 = "";
    num2 = "";
  }
}

//if e.code includes('Digit)
//push e.key to firstNumArray if operator is not equal to ''
// console.log(`the operation is ${num1} ${operator} ${num2}`);
// result = operate(parseFloat(num1), operator, parseFloat(num2));
// console.log(`the current result is ${result}`);
// num1 = result;
// num2 = "";
// secondNumArray = [];

// allOperatorBtns.forEach((button) =>
//   button.addEventListener("click", function () {
//     operator = button.value;
//     if (secondNumArray.length == 0 && num1 === "") {
//       num1 = firstNumArray.toString();
//       num1 = num1.replaceAll(",", "");
//       console.log("now the first number is" + num1);
//       console.log("the operator is" + operator);
//     } else if (secondNumArray.length !== 0) {
//       num2 = secondNumArray.toString();
//       num2 = num2.replaceAll(",", "");
//       console.log("the expression is" + num1 + operator + num2);
//       result = operate(parseFloat(num1), operator, parseFloat(num2));
//       console.log(result);
//       num1 = result;
//       secondNumArray = [];
//     } else if (secondNumArray.length == 0 && num1 !== "") {
//       num2 = secondNumArray.toString();
//       num2 = num2.replaceAll(",", "");
//       console.log(`the expression is  ${num1}  ${operator} ${num2}`);
//     } else if (secondNumArray.length == 0 && num2 !== "") {
//       console.log(secondNumArray + num1 + num2);
//     }
//   })
// );

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator == "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator == "*") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator == "/" && secondNumber !== 0) {
    result = divide(firstNumber, secondNumber);
  } else if (secondNumber === 0) {
    result = "no";
  }
  return result;
}
