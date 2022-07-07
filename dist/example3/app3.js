"use strict";
function combine(n1, n2, greet, leaving) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        debugger;
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "hello", "adios");
console.log(combinedAges);
function printResultx(num) {
    console.log("This is a test: " + num);
}
let combinedNumbers;
combinedNumbers = printResultx;
function subtractNumbers(n1, n2, cb) {
    let result = n1 - n2;
    cb(result);
}
subtractNumbers(4, 2, combinedNumbers);
subtractNumbers(5, 2, (result) => {
    console.log("Anonymous functioN: " + result);
});
let userInput;
let userName;
userInput = 4;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, errorNumber) {
    throw { message: message, errorCode: errorNumber };
}
generateError("Error file", 312);
const inputNum1 = document.getElementById("num1");
//# sourceMappingURL=app3.js.map