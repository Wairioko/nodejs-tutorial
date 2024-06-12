// example of eventloop execution
// sync code is always processed first then async 
// console.log("One");
// process.nextTick(() => console.log("two"));
// console.log("Third");


// all call backs in nexttick queue get executed before those in promise
// Promise.resolve().then(() => console.log("One"));
// process.nextTick(() => console.log("two"));


process.nextTick(() => console.log("next1"));
process.nextTick(() => {
    console.log("next2");
    process.nextTick(() => console.log("inner next tick"));
});
process.nextTick(() => console.log("next3"));
// next tick takes priority in microtask
// 1,2,3 is printed 1st 
// the inner is printed last as node executes code
// 1 it logs, 2 it logs but finds an inner function
// appends to last element of the queue
// proceeds with processing 3 and then finally the inner code
// this is the logic of execution for process and promise


Promise.resolve().then(() => console.log("promise1"));
Promise.resolve().then(() => {
    console.log("promise2");
    Promise.resolve().then(() => console.log("inner promise"));
});
Promise.resolve().then(() => console.log("promise3"));