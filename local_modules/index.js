console.log("This is the index page")

// learning about modules, how to import functionalities present in other files
// will learn how to import addition and multiplication functions hosted in 
//  other files

console.log("This is the index page");

// Import the required modules, add and multiply
const add = require('./add');
const multiply = require('./multiply');

// Simple function taking in two vars from the answers from add and multiply
// The function then multiplies the answers and logs the answer

const add_multiply = (a, b) => {
    const c = a * b;
    console.log(`Answer from addition is ${a} and from multiplication module is ${b}, they are multiplied to give ${c}`);
    console.log(c);
    return c;
}

const var_add = add(2, 3);
const var_multiply = multiply(5, 6);
add_multiply(var_add, var_multiply);
