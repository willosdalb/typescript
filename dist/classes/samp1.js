"use strict";
class Department {
    constructor(n) {
        this.name = "DEFAULT";
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Departments: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let dept = new Department("IT DEPARTMENT");
console.log(dept.name);
dept.addEmployee("Max");
dept.addEmployee("Wally");
dept.describe();
dept.printEmployeeInformation();
//# sourceMappingURL=samp1.js.map