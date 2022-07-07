function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (!showResult) {
    return result;
  }
  console.log(phrase + result);
}

const num1 = 4;
const num2 = 5.2;
const printResult = true;
const resultPhrase = "The result: ";

console.log(add(num1, num2, printResult, resultPhrase));

// Objects

const person: {
  name: string;
  age: number;
} = {
  name: "william",
  age: 30,
};

console.log(person.name);

// Array

const human: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "william",
  age: 30,
  hobbies: ["sports", "cooking"],
};

for (const hobby of human.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

console.log("-------------------------------------------------------");

console.log(human.hobbies[1]);

// Tuples

const employee: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "william",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};
employee.role.push("admin");
employee.role.push(3);

employee.role = [3, "user"];

// Enum

enum Role {
  ADMIN = 5,
  READONLY = 100,
}

const employeeEnums: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "william",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};
employee.role.push("admin");
employee.role.push(3);

employee.role = [3, "user"];
console.log(Role.READONLY);

// Any

let favoriteActivities: any[];
favoriteActivities = ["sports", 1, "ddd", true];
