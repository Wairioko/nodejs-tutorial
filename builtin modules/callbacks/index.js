 function salimia(name){
    console.log(`niaje ${name}`)
 }

// iife on display as well as functions as first class objects
(function greeting(swahili_greeting_fn){
    const name = `munga`;
    swahili_greeting_fn(name);
}(salimia));



