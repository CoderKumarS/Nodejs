const repeatedFunction =()=> {
    console.log('Repeated function executed!');
};
// Execute after 2 seconds
const intervalID=setInterval(repeatedFunction,1000);

setTimeout(() => {
    clearInterval(intervalID); //stop interval
    console.log('Interval Stopped');
}, 5000);