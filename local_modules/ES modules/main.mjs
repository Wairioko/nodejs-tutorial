import math from "./math-ems.mjs"
// m1 of using exports
console.log(math.add(5,6));
console.log(math.subtract(5,6));

// we can also destructure functions from object

const {add, subtract} = math;
console.log(add(5,6));
console.log(subtract(5,6));

