// timeout executes with FIFO
// least delay exceuted first
setTimeout(() => console.log("timeout1"), 1000);
setTimeout(() => console.log("timeout2"), 500);
setTimeout(() => console.log("timeout3"), 0);

// tasks in microqueue take precedence over those in timer queue
setTimeout(() => console.log("timeout1"), 0);
// microtask callbacks inside set timeout take precedence
// over the settime out callbacks
setTimeout(() =>{
    console.log("timeout2"), 0;
    Promise.resolve().then(() => console.log("inner promise timeout"));
    process.nextTick(() => console.log("process timeout inner"), 0);
    
});
setTimeout(() => console.log("timeout3"), 0);


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