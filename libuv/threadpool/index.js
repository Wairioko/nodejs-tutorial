// import cyrypto module
const crypto = require('node:crypto');

// set start time
const start = Date.now();

// encode using sync, locking and time double with duplication of code(1= 835ms, 2=1483ms)
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);


// use of async(1=757ms, 2=(925,962))
MAX_CALLS = 2;
for(let i=0; i < MAX_CALLS; i++){
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log("Hash: ", Date.now() - start);
    })
}
