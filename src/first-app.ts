let userName: string = "Max";

//userName
userName = "Max";

let userAge = 34;

let isValid = true;

// string, number, boolean
type StringOrNum = string | number;

let userId: StringOrNum = "abc1";
userId = 123;

// object types
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// let user: object;
let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // or 123
};

// array types
// hobbies is an array of strings
let hobbies: string[]; //number[], boolean[], {name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3]

// function types
// Use void when function doesn't have any return statement
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

// seperate type to be reused
type AddFn = (a: number, b: number) => number;

// function as a value syntax
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);
