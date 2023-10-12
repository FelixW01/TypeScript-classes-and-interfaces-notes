class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const business = new Department("Business");
console.log(business);
