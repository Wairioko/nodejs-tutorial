const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order() {
        this.orderNumber++;
        this.emit('order burger', 'large', 'beef');
    }

    displayOrderNum() {
        console.log(`Current order number is ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;
