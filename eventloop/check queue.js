const fs = require("node:fs");

// micrtotask queues callbacks are executed after I/O callbacks
// and before check queue callbacks
fs.readFile(__filename, () => {
    console.log("this is readfile1");
    setImmediate(() => console.log("immediate call back"));
    process.nextTick(() => console.log("Inner nextTick1"));
    Promise.resolve().then(() => console.log("Inner promise1"));

});

process.nextTick(() => console.log("nextTick1"));
Promise.resolve().then(() => console.log("promise1"));
setTimeout(() => console.log("timeout1"), 0);

// the for loop illustrates h ow synchronous operations affect the execution
// of the event loop
for(let i = 0; i< 2000000000; i++){}
