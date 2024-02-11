module.exports = function sum(num1, num2) {
    if (typeof num1!== 'int'&&typeof num2!== 'int') {
        throw new Error('Input must be a number');
    }
    
    const sum = num1+num2;
    
    return sum;
};