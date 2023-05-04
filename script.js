const add = function (num1, num2) {
  return +num1 + +num2;
};

const subtract = function (num1, num2) {
  return +num1 - +num2;
};

const multiply = function (num1, num2) {
  return +num1 * +num2;
};

const divide = function (num1, num2) {
  return +num1 / +num2;
};

let firstNumber;
let operator;
let secondNumber;

const operate = function (firstNumber, operator, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
};

let currentDisplayValue = "";

let currentDisplayElement = document.getElementById("display-current");

currentDisplayElement.textContent = +currentDisplayValue;

console.log(currentDisplayElement.textContent);
