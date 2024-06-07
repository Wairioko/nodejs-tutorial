 function salimia(name){
    console.log(`niaje ${name}`)
 }

// iife on display as well as functions as first class objects
// salimia is a callback function
// its synchronous callback as it gets exceuted immediately

(function greeting(swahili_greeting_fn){
    const name = `munga`;
    swahili_greeting_fn(name);
}(salimia));

// Async callbacks - continous operation after a time/event
// async nature prevents blocking of executions

function print_hello(){
    document.getElementById("demo").innerHTML = `Hello world`;

}
document.getElementById('btn').addEventListener('click', print_hello)



