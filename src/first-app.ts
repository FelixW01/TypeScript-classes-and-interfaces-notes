let userName: string = "Max";

//userName
userName = "Max";

let userAge = 34;

let isValid = true;

// string, number, boolean

let userId: string | number = "abc1";
userId = 123;

// object types

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

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
