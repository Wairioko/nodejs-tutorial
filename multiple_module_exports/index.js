console.log("This is the index page");

// Learning about multiple module imports
const math_modules = require("./add_subtract_multiply");

const add_sub_mult = (a, b) => {
    const addition_result = math_modules.add(a, b);
    console.log(`Addition result is ${addition_result}`);
    
    const subtraction_result = math_modules.subtract(a, b);
    console.log(`Subtraction result is ${subtraction_result}`);
    
    const multiplication_result = math_modules.multiply(a, b);
    console.log(`Multiplication result is ${multiplication_result}`);
}

add_sub_mult(10, 6);
