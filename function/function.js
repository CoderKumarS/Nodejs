// Anonymous Function Expression
const multiply = function(a,b){
    return a*b;
};

// Invocation
let product = multiply(4,6);
console.log('Function Expression - Product: ', product);

// Arrow function
const subtract = (a,b)=>a-b;
// Invocation
let difference = subtract(4,6);
console.log('Arrow Function - Difference: ', difference);