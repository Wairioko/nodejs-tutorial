const fs = require('fs');

// close queue callbacks are executed after all other queues callbacks
// iteration of the event loop
const readableStream = fs.createReadStream(__filename);

readableStream.close();

readableStream.on('close', () => {
    console.log("from readable stream callback");
});

setImmediate( () => console.log("immediate1") );
setTimeout( ()=> console.log("timeout1"), 0);
Promise.resolve().then(() => console.log("promise1"));
process.nextTick(() => console.log("nextTick1"));
