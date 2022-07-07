var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //   constructor(n: string) {
    //     this.name = n;
    //     }
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private name: string = "DEFAULT";
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department Name --- Id: ".concat(this.id, " Departments: ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.bullShit = function (firstName) {
        return { name: firstName };
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.abstractedMethod = function () {
        throw new Error("Method not implemented.");
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.abstractedMethod = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a value");
            }
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printOnPaper = function () {
        console.log("Printing on paper");
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
        this.printOnPaper();
    };
    AccountingDepartment.createRandomThings = function () {
        console.log("create random things");
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("IT Dept", ["Luka"]);
// console.log(it.name);
it.addEmployee("Max");
it.addEmployee("Wally");
it.describe();
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment("AccountingDept", []);
// console.log(accounting.name);
accounting.addEmployee("Max");
accounting.addEmployee("Wally");
accounting.describe();
accounting.addEmployee("Thanos");
accounting.addReports("Something WEnt Wrong");
accounting.mostRecentReport = "New REPORT";
accounting.printReports();
console.log(accounting.mostRecentReport);
console.log(accounting);
AccountingDepartment.createRandomThings();
