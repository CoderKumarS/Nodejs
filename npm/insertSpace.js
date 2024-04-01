module.exports = function insertSpace(inputString) {
    if (typeof inputString!== 'string') {
        throw new Error('Input must be a string');
    }
    
    const spacedString = inputString.replace(/./g, '$&');
    
    return spacedString.trim();
};