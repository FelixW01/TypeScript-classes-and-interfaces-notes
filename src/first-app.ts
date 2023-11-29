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

// interface / blueprints, uses {} instead of = unlike types
// interfaces are essentially to create objects
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
};

// you are required to add the properties from  credentials
// class AuthCredentials implements Credentials {
//   email: string;
//   password: string;
//   userName: string;
// }

// function login(credentials: Credentials) {}

// login(new AuthCredentials());

// type Admin2 = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// merge user types with & instead of a union | that would mean it's one or the other
// type AppAdmin = Admin2 & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Felix",
// };

interface Admin2 {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin2, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Felix",
};
