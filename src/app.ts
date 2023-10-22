// Can be implimented by class to provide type checking of objects
interface Greetable {
  name: string;

  greet(phrase: string): void;
}
// You can pass multiple interfaces on a class
class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// User1 HAS to be greetable, having at least a name with a type of string and a greet method
// with the input of phrase and an a return of nothing.
let user1: Greetable;

// User1 is constrained to being greetable, on top of the blueprint Person class making the
// created object even more strict.
user1 = new Person("Felix");
user1.greet(" Hi there - I am ");
console.log(user1);
