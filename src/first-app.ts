let userName: string = "Max";

//userName
userName = "Max";

let userAge = 34;

let isValid = true;

// string, number, boolean

let userId: string | number = "abc1";
userId = 123;

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
