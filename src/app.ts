class Department {
  private name: string;
  //only methods within the class can affect the "private" employees
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const business = new Department("Business");
business.addEmployee("Felix Willem");
business.addEmployee("Jillian");
business.printEmployeeInformation();

business.describe();

// const businessCopy = { name: "DUMMY", describe: business.describe };
// businessCopy.describe();
