// events module allows working with events in node js
// action in app that we can respond to
// allows us to create custom events in a non blocking manner

// import the module events
const EventEmitter = require('events');

// create a new emitter object
const emitter = new EventEmitter;

// set emitter to listen for name argument "order burger" as the emitter trigger
// set it to accept two arguments size and flavour
// prints them out when order received
emitter.on("order burger",(size, flavour)=>
    {
        console.log(`order received for a ${size}, ${flavour} burger`);
    });

emitter.on("order burger",(size)=>
    {
        if(size=='large'){
        console.log(`order received for a ${size} burger`);
        }
    });

emitter.emit("order burger", "large", "mango");



