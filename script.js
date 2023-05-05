// The following code declares four functions that perform basic math operations: add, subtract, multiply, and divide.

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

// The following lines of code declare three variables without any initial value: firstNumber, operator, and secondNumber.

let firstNumber;
let operator;
let secondNumber;

// The following code declares a function called "operate" that takes three parameters: firstNumber, operator, and secondNumber. This function calls one of the four previously declared math functions based on the provided operator, and returns the result of the operation.

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

// The following lines of code declare four variables: currentDisplayValue and currentDisplayElement, oldDisplayValue and oldDisplayElement. currentDisplayValue is initially set to an empty string, and currentDisplayElement is set to the HTML element with an id of "display-current". The value of currentDisplayValue is then set as the text content of currentDisplayElement. The same is done for the older values.

let currentDisplayValue = "";

let currentDisplayElement = document.getElementById("display-current");

currentDisplayElement.textContent = currentDisplayValue;

let oldDisplayValue = "";

let oldDisplayElement = document.getElementById("display-old");

oldDisplayElement.textContent = oldDisplayValue;

// The following code declares a function called "changeDisplayValue" that takes a parameter called "item". This function appends the provided "item" to the end of the currentDisplayValue variable, and sets the text content of currentDisplayElement to the new value of currentDisplayValue.

let changeDisplayValue = function (item) {
  currentDisplayValue += item;
  currentDisplayElement.textContent = currentDisplayValue;
};

// The following lines of code declare variables for various HTML elements: clearButton, deleteButton, calcButtonsParent, and several number buttons. Each of these variables is set to the corresponding HTML element using document.getElementById().

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

// The following code adds event listeners to the clearButton and deleteButton HTML elements. When clicked, the clearButton event listener sets currentDisplayValue to an empty string and updates the text content of currentDisplayElement. The deleteButton event listener removes the last character from currentDisplayValue and updates the text content of currentDisplayElement.

clearButton.addEventListener("click", function () {
  currentDisplayValue = "";
  currentDisplayElement.textContent = +currentDisplayValue;
});

deleteButton.addEventListener("click", function () {
  currentDisplayValue = currentDisplayValue.slice(0, -1);
  currentDisplayElement.textContent = currentDisplayValue;
});

// The following lines of code add event listeners to each of the number buttons. When clicked, these event listeners call the changeDisplayValue() function with the value of the clicked button as the "item" parameter.

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
periodSymbol.addEventListener("click", function () {
  if (currentDisplayValue.indexOf(".") < 0) {
    changeDisplayValue(".");
  }
});

// The following lines of code declare variables for various HTML elements that represent mathematical symbols: divideSymbol, multiplySymbol, minusSymbol, equalSymbol, and plusSymbol. Each of these variables is set to the corresponding HTML element using document.getElementById().

let divideSymbol = document.getElementById("divide-symbol");
let multiplySymbol = document.getElementById("multiply-symbol");
let minusSymbol = document.getElementById("minus-symbol");
let equalSymbol = document.getElementById("equal-symbol");
let plusSymbol = document.getElementById("plus-symbol");
