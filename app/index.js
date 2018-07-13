// ---------------------------------------

let a = "hello";
console.log(a);
// coding inside brackets creates a new scope
{
  let a = "goodbye";
  console.log("a: ", a);
}

// ---------------------------------------

// WRONG
// const b = 2;
// b = 3 * 4;

//RIGHT
const array = [1, 2, 3, 4];
array.push(5);
console.log("array: ", array);

// ---------------------------------------

const hello = "hello";
const world = "world";
const wholeWord = `${hello} ${world}`;
console.log("wholeWord: ", wholeWord);

// ---------------------------------------

// SPREAD OPERATOR
let arraySO = [7, 8, 9];
let secondArraySO = [6, ...arraySO, 10];
console.log(secondArraySO);

// With this function, you can pass how many parameters as you want, that will log it correctly
function print(...prints) {
  console.log("Prints: ", prints);
}

let prints = [1, 2, 3];
print(1, 2, 3, 4, 5, 6, 7);

// ---------------------------------------

// DESTRUCTURING ARRAYS OR OBJECTS
let destructuringArray = [100, 200];
let [firstDestructuring, secondDestructuring] = destructuringArray;
console.log("Destructuring array: ", firstDestructuring, secondDestructuring);

let destructuringObj = { firstObj: 300, secondObj: 400 };
let { firstObj, secondObj } = destructuringObj;
console.log("Destructuring objects: ", firstObj, secondObj);

// ---------------------------------------

// ARROW FUNCTIONS
const blastoff = () => {
  console.log("Arrow Function!");
};

blastoff();

// ---------------------------------------

// MAP FUNCTION
let points = [10, 20, 30];
points = points.map(item => item + 1);

console.log("Map function: ", points);

// ---------------------------------------

// FILTER FUNCTION
let scores = [90, 85, 67, 71, 70, 55];
let passingArray = scores.filter(el => el >= 70);

console.log(passingArray);

// ---------------------------------------

// IMPORTING/EXPORTING VALUES
import { students, total } from "./students";
console.log("Students: ", students);
console.log("Total number of students: ", total);

// ---------------------------------------

// IMPORTING/EXPORTING FUNCTIONS
import { add, multiply } from "./calculator";
console.log("Add function: ", add(3, 5));
console.log("Multiply function: ", multiply(3, 5));

// IMPORTING DEFAULT MULTIPLY
// import multiply from './calculator'

// ---------------------------------------

// ES6 CLASS
import Entity from "./entity";

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }

  greet() {
    console.log(`Hello! I'm ${this.name} from the Shire!`);
  }
}

let Frodo = new Hobbit("Frodo Baggins", 4.5);
Frodo.greet();

// ---------------------------------------
