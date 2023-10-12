class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const business = new Department("Business");
console.log(business);

business.describe();

const businessCopy = {  name: 's', describe: business.describe };
businessCopy.describe();
