const EventEmitter = require('events');
const PizzaShop = require('./own_event_emitter');
const Drink = require('./drink');

// Create a new emitter object
const pizzeriaMunga = new PizzaShop();
const complimentDrink = new Drink();

// Set emitter to listen for the "order burger" event
pizzeriaMunga.on('order burger', (size, flavour) => {
    console.log(`Order received for a ${size}, ${flavour} burger`);
    if (size === 'large') {
        console.log(`Order received for a ${size} burger`);
        complimentDrink.complimentaryDrink(size);
    }
});

pizzeriaMunga.order();
pizzeriaMunga.displayOrderNum();
