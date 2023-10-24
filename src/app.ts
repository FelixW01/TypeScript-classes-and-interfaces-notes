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

interface Lengthy {
  length: number;
}

// Generic function, a bit unspecific, extends lengthy to tell TS that we're going to get a .length value
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 0) {
    return console.log(descriptionText);
  } else {
    descriptionText = "Got " + element.length + " elements.";
    return [element, descriptionText];
  }
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Felix" }, "name"));
