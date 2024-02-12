const events = require('events');
// const { EventEmitter } = require('stream');
const myEmitter = new EventEmitter();

// Event Registration =on Method
myEmitter.on('firstevent', (arg1,arg2)=>{
    // Event handler logic
    console.log("Event occurred with arguments: ", arg1,arg2); 
});

// Event Emission =emit Method
myEmitter.emit('firstevent', "hello", "hii");