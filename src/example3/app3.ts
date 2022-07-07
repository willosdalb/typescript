// Alias type
type Combinable = number | string;
type Farewell = "bye" | "adios";

// Union type  -> n2: number | string

// Literal Type : greet: "hello"

function combine(
  n1: Combinable,
  n2: number | string,
  greet: "hello" | "hi",
  leaving: Farewell
): number | string {
  let result;

  if (typeof n1 === "number" && typeof n2 === "number") {
    debugger;
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "hello", "adios");

console.log(combinedAges);

function printResultx(num: number): void {
  console.log("This is a test: " + num);
}

// Function as Types

// This is similar to delegatew
let combinedNumbers: (a: number) => void;
combinedNumbers = printResultx;

// Callback

function subtractNumbers(n1: number, n2: number, cb: (a: number) => void) {
  let result = n1 - n2;
  cb(result);
}

subtractNumbers(4, 2, combinedNumbers);

subtractNumbers(5, 2, (result) => {
  console.log("Anonymous functioN: " + result);
});

// Unknown
// Unknown is stricter than any. It will not let store anytype to a fix type variable without checking the data type

let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// NEVER TYPE similar to void

function generateError(message: string, errorNumber: number): never {
  throw { message: message, errorCode: errorNumber };
}

generateError("Error file", 312);

const inputNum1 = document.getElementById("num1");
