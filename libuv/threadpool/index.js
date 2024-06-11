// import cyrypto module
const crypto = require('node:crypto');
const https = require('node:https');
// set threadpoolsize calls to 16, helps with performance
// but is restricted by number of cores accessible
process.env.UV_THREADPOOL_SIZE = 16;

// set start time
const start = Date.now();

// encode using sync, locking and time double with duplication of code(1= 835ms, 2=1483ms)
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);


// use of async(1=757ms, 2=(925,962))
MAX_CALLS = 16;
// for(let i=0; i < MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i++}`, Date.now() - start);
//     })
// }

// now this thread pooling does not work for some async methods
// time taken will be all similar for this
// this is because, https.request does not use thread pool
// its not affected by number of CPU cores
// it is a network input/output operation

for(let i=0;i<MAX_CALLS; i++){
    https.request("https://www.google.com", (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`Request: ${i + 1}`, Date.now()- start)
        })
        
    })
.end();
}
// libuv delegates work to os kernel and when possible is polls it 
// to see if request completed


// in node js async methods handled by libuv
// handled in 2 ways:
// native asynch mechanism
// threadpool - can still become bottle neck if all threads are busy


