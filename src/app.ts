// Generic type, type connected to another type
// const names: Array<string> = []; //string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// generic types offers less strict, but effective type checks
// in this example, T & U is just placeholder for whatever type the input is, while
// adding the costraint by extending the object forces the input to be an object the entire process.
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Felix", hobbies: ["Music"] }, { age: 23 });
console.log(mergedObj);
