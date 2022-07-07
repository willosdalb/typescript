abstract class Department {
  //   private name: string = "DEFAULT";
  protected employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //     }

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department Name --- Id: ${this.id} Departments: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  static bullShit(firstName: string) {
    return { name: firstName };
  }

  abstract abstractedMethod(this: Department): void;
}

class ITDepartment extends Department {
  abstractedMethod(this: Department): void {
    throw new Error("Method not implemented.");
  }
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  abstractedMethod(this: Department): void {
    throw new Error("Method not implemented.");
  }
  private lastReport: string;
  static numero: number;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a value");
    }
    this.addReports(value);
  }

  override addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }

  public addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  private printOnPaper() {
    console.log("Printing on paper");
  }

  printReports() {
    console.log(this.reports);
    this.printOnPaper();
  }

  static createRandomThings() {
    console.log("create random things");
  }
}

let it = new ITDepartment("IT Dept", ["Luka"]);

// console.log(it.name);

it.addEmployee("Max");
it.addEmployee("Wally");

it.describe();

it.printEmployeeInformation();

console.log(it);

let accounting = new AccountingDepartment("AccountingDept", []);

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
