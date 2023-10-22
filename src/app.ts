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

let user1: Greetable;

user1 = new Person("Felix");
user1.greet(" Hi there - I am ");
console.log(user1);
