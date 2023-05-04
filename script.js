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

let changeDisplayValue = function (number) {
  currentDisplayValue += number;
  currentDisplayElement.textContent = +currentDisplayValue;
};

let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");

let calcButtonsParent = document.getElementById("calc-buttons");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let periodSymbol = document.getElementById("period-symbol");
let divideSymbol = document.getElementById("divide-symbol");
let multiplySymbol = document.getElementById("multiply-symbol");
let minusSymbol = document.getElementById("minus-symbol");
let equalSymbol = document.getElementById("equal-symbol");
let plusSymbol = document.getElementById("plus-symbol");

clear.addEventListener("click", function () {
  currentDisplayValue = "";
  currentDisplayElement.textContent = +currentDisplayValue;
});

one.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
two.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
three.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
four.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
five.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
six.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
seven.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
eight.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
nine.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
zero.addEventListener("click", function () {
  changeDisplayValue(+this.textContent);
});
