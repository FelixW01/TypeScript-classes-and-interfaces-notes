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
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

function add(a: Combineable, b: Combineable) {
  // type guard, if a or b is string, turn the output to string by concatenation
  // if none of the types are string, then return the number calculation
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving ...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck ...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // type guard that checks if vehicle is an instance of the class truck,
  // works because classes are just constructors when compiled into js
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5);
  }

  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(5);
  //   }
}

useVehicle(v1);
useVehicle(v2);

// descriminated property, 1 common property in the interfaces which describes the object
// usually used in conjunction with unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(" Moving at speed: " + speed);

  //   if ("flyingSpeed" in Animal) {
  //     console.log("Moving with speed: " + animal.flyingSpeed);
  //   }
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// ! indicates that the value can't be null
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there";

interface ErrorContainer {
  // {email: ' Not a valid email', username: 'Must start with a character!'}
  // Index type, flexible amount of keys/properties as long as they are a string value type
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
