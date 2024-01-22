const delayedFunction =()=> {
    console.log('Delayed function executed!');
};
console.log('First');
// Execute after 2 seconds
setTimeout(delayedFunction,2000); 
console.log('second');