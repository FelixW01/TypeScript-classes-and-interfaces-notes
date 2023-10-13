class Department {
  // private id: string;
  //   private name: string;
  //only methods within the class can affect the "private" employees, "readonly" will stop it from being changed.
  //protected are only accessible to the instantiated class and also inherited classes
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id= id;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class BusinessDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error(" No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    } else {
      this.addReport(value);
    }
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Business");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Felix"]);
it.addEmployee("Felix Willem");
it.addEmployee("Jillian");
it.printEmployeeInformation();
console.log(it);
it.describe();

const business = new BusinessDepartment("d2", []);

business.mostRecentReport = "Year end report";
business.addReport("Something went wrong...");
console.log(business.mostRecentReport);

business.addEmployee("Max");
business.addEmployee("Manu");
business.printReports();
// business.printEmployeeInformation;
console.log(business);
// const businessCopy = { name: "DUMMY", describe: business.describe };
// businessCopy.describe();
