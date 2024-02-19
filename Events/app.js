const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const eventHandler = (arg1, arg2) => {
    console.log("Event occurred with arguments: ", arg1, arg2);
}
// // Event Registration =on Method
// myEmitter.on('firstevent', eventHandler);

// // Event Registration for only one time listen=once Method
// myEmitter.once('firstevent', eventHandler);

// // Event Emission =emit Method
// myEmitter.emit('firstevent', "hello1", "hii");
// myEmitter.emit('firstevent', "tata", "bye");
// myEmitter.emit('firstevent', "hello", "hii");
// myEmitter.emit('firstevent', "tata", "bye");

// Removing Event listener

myEmitter.on('firstEvent', eventHandler);

for (var i = 0; i < 5; i++) {
    if (i == 2) {
        myEmitter.removeListener('firstEvent', eventHandler);
    }
    myEmitter.emit('firstEvent', 'Hello', 'Hii');
}