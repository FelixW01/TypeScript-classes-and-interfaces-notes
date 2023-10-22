type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Felix",
  privileges: ["create0server"],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;
