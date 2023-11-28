var userName = "Max";
//userName
userName = "Max";
var userAge = 34;
var isValid = true;
var userId = "abc1";
userId = 123;
// let user: object;
var user;
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc", // or 123
};
// array types
// hobbies is an array of strings
var hobbies; //number[], boolean[], {name: string; age: number}[]
hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3]
// function types
// Use void when function doesn't have any return statement
function add(a, b) {
    var result = a + b;
    console.log(result);
}
// function as a value syntax
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
var creds;
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
