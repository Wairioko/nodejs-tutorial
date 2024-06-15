const fs = require("node:fs");

// IO queue callbacks are polled and executed after microtask queues
// and timer queue callbacks

fs.readFile(__filename, () => {
    console.log("this is readfile1");
});

process.nextTick(() => console.log("nextTick1"));
Promise.resolve().then(() => console.log("promise1"));
setTimeout(() => console.log("timeout1"), 0);
setImmediate(() => console.log("immediate call back"))

// the for loop illustrates how synchronous operations affect the execution
// of the event loop
for(let i = 0; i< 2000000000; i++){}
