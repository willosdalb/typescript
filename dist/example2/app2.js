"use strict";
function add(n1, n2, showResult, phrase) {
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
const person = {
    name: "william",
    age: 30,
};
console.log(person.name);
const human = {
    name: "william",
    age: 30,
    hobbies: ["sports", "cooking"],
};
for (const hobby of human.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
console.log("-------------------------------------------------------");
console.log(human.hobbies[1]);
const employee = {
    name: "william",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
};
employee.role.push("admin");
employee.role.push(3);
employee.role = [3, "user"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READONLY"] = 100] = "READONLY";
})(Role || (Role = {}));
const employeeEnums = {
    name: "william",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
employee.role.push("admin");
employee.role.push(3);
employee.role = [3, "user"];
console.log(Role.READONLY);
let favoriteActivities;
favoriteActivities = ["sports", 1, "ddd", true];
//# sourceMappingURL=app2.js.map