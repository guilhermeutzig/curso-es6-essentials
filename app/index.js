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
